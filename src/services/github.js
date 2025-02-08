const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'boxxello';

class GitHubService {
    constructor() {
        this.token = import.meta.env.VITE_GITHUB_TOKEN;
        this.headers = {
            'Authorization': `token ${this.token}`,
            'Accept': 'application/vnd.github.v3+json'
        };
    }

    async fetchUserStats() {
        try {
            const [user, repos, contributions] = await Promise.all([
                this.fetchUserData(),
                this.fetchRepos(),
                this.fetchContributions()
            ]);

            const languages = await this.fetchLanguages(repos);

            return {
                commits: await this.calculateTotalCommits(repos),
                stars: this.calculateTotalStars(repos),
                repos: repos.length,
                contributions: contributions,
                languages: languages
            };
        } catch (error) {
            console.error('Error fetching GitHub stats:', error);
            return null;
        }
    }

    async fetchUserData() {
        const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
            headers: this.headers
        });
        return response.json();
    }

    async fetchRepos() {
        const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?per_page=100`, {
            headers: this.headers
        });
        return response.json();
    }

    async fetchContributions() {
        // This is a rough estimate since GitHub's contribution graph 
        // requires web scraping which we want to avoid
        const events = await fetch(
            `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events/public?per_page=100`,
            { headers: this.headers }
        );
        const data = await events.json();
        return data.length; // This will give us recent activity count
    }

    async calculateTotalCommits(repos) {
        let totalCommits = 0;
        
        for (const repo of repos) {
            try {
                const response = await fetch(
                    `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
                    { headers: { ...this.headers, 'Accept': 'application/vnd.github.v3.sha' } }
                );
                
                // Get total from last page
                const link = response.headers.get('link');
                if (link) {
                    const match = link.match(/&page=(\d+)>; rel="last"/);
                    if (match) {
                        totalCommits += parseInt(match[1]);
                    }
                } else {
                    // If no pagination, count the commits manually
                    const commits = await response.json();
                    totalCommits += commits.length;
                }
            } catch (error) {
                console.error(`Error fetching commits for ${repo.name}:`, error);
            }
        }
        
        return totalCommits;
    }

    calculateTotalStars(repos) {
        return repos.reduce((total, repo) => total + repo.stargazers_count, 0);
    }

    async fetchLanguages(repos) {
        const languageStats = {};
        let totalBytes = 0;

        for (const repo of repos) {
            try {
                const response = await fetch(repo.languages_url, {
                    headers: this.headers
                });
                const languages = await response.json();

                // Sum up bytes for each language
                for (const [language, bytes] of Object.entries(languages)) {
                    languageStats[language] = (languageStats[language] || 0) + bytes;
                    totalBytes += bytes;
                }
            } catch (error) {
                console.error(`Error fetching languages for ${repo.name}:`, error);
            }
        }

        // Convert bytes to percentages
        const languagePercentages = {};
        for (const [language, bytes] of Object.entries(languageStats)) {
            languagePercentages[language] = ((bytes / totalBytes) * 100).toFixed(1);
        }

        // Sort by percentage and take top 5
        return Object.entries(languagePercentages)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});
    }
}

export const githubService = new GitHubService();
