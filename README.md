# React Portfolio - Retro Gaming Style

This portfolio is built with React and features a unique retro gaming aesthetic, complete with arcade-style fonts, animations, and interactive elements.

View live site at [box-xo.com](https://box-xo.com/)

## Project Structure

```
src/
├── Assets/              # Static assets (images, fonts)
├── components/          # React components
│   ├── Home/           # Home page components
│   │   ├── Home.jsx    # Main home page
│   │   ├── AboutMe.jsx # About section
│   │   └── Type.jsx    # Typing animation
│   ├── About/          # About page components
│   ├── Layout/         # Layout components
│   ├── Resume/         # Resume components
│   └── MiniGame/       # Debug Arcade Game components
│       ├── components/ # Game UI components
│       ├── hooks/      # Game logic hooks
│       └── gameState.js # Game constants and state
├── App.jsx             # Root component
└── Routes.jsx          # Application routing
```

## 🎮 Debug Arcade Game

The Bug crusher Arcade Game is an interactive mini-game where players catch and eliminate different types of bugs. The game features a retro arcade style with modern React implementation.

### Key Features

- **Real-time Bug Catching**: Players move a debug tool to catch different types of bugs
- **Multiple Bug Types**:
  - Syntax Errors (Red) - Fast but weak
  - Runtime Errors (Cyan) - Medium speed and points
  - Logic Errors (Yellow) - Slow but high value

- **Power-up System**:
  - Debug Mode - Slows all bugs
  - TypeScript Shield - Immunity to syntax errors
  - Django ORM Boost - Slows runtime errors
  - Debug Glasses - Highlights logic errors
  - Code Formatter - Clears screen

- **Achievement System**:
  - Bug Hunter - Catch total bugs
  - Syntax Master - Perfect syntax catches
  - Runtime Warrior - Survival time
  - Logic Legend - Logic bug catches
  - Clean Coder - High score

- **Advanced Game Mechanics**:
  - Combo system for consecutive catches
  - Progressive difficulty scaling
  - Score multipliers
  - Life system
  - Particle effects

### Technical Implementation

- **Canvas-based Rendering**: Smooth graphics with `useGameRenderer`
- **Optimized Game Loop**: RAF-based updates with `useGameLoop`
- **Collision Detection**: Precise hit detection with `useCollisionDetection`
- **State Management**: Custom hooks for game state
- **Performance Optimizations**:
  - Memoized components
  - RAF-based animations
  - Batched state updates
  - Optimized re-renders

### Game Controls

- **Movement**: Arrow keys or A/D
- **Power-ups**: Spacebar
- **Pause**: ESC key
- **Menu Navigation**: Mouse/Touch

## Key Features

- **Retro Gaming Aesthetic**: Uses 'Press Start 2P' font and arcade-style animations
- **Responsive Design**: Fully responsive layout using Chakra UI
- **Interactive Elements**: 
  - Typing animation
  - Hover effects
  - Parallax tilt on images
  - Smooth transitions and animations

## Styling Conventions

- **Font Family**: 'Press Start 2P' for headings and important text
- **Colors**: 
  - Light mode: Teal accents (#4FD1C5)
  - Dark mode: Lighter teal (#81E6D9)
- **Animations**:
  - Text glow effects
  - Smooth transitions
  - Interactive button effects

## Component Guidelines

### Text Styling
- Headings: Press Start 2P font with glow effect
- Body text: Press Start 2P for arcade sections, system font for readability
- Text shadows for enhanced visibility

### Interactive Elements
- Buttons feature arcade-style borders and glow effects
- Hover states include scale transformations
- Click animations for tactile feedback

## Technologies Used

- React
- Chakra UI
- Framer Motion
- React Intl (Internationalization)
- React Parallax Tilt



## 🎨 Design Guidelines

### Typography
- **Primary Font**: 'Press Start 2P' for headings and arcade elements
- **Secondary Font**: System font stack for body text
- **Font Sizes**: Follow 8px grid system

### Colors
- **Light Mode**
  - Primary: Teal (#4FD1C5)
  - Background: White/Gray (#FFFFFF/#F7FAFC)
  - Text: Dark Gray (#2D3748)

- **Dark Mode**
  - Primary: Light Teal (#81E6D9)
  - Background: Dark Gray (#1A202C)
  - Text: Light Gray (#E2E8F0)

### Animations
- Smooth transitions (0.2s-0.3s)
- Arcade-style hover effects
- Text glow animations
- Parallax tilt on images

## 🛠️ Technologies

- React 18
- Chakra UI
- Framer Motion
- React Router 6
- React Intl
- React Parallax Tilt
- TypeWriter Effect
- GSAP
- Vite

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


⭐ Project Stats

[![Star History Chart](https://api.star-history.com/svg?repos=boxxello/My-react-portfolio&date)](https://star-history.com/#boxxello/My-react-portfolio)

## 📊 Project Activity

### Contributions
![GitHub contributors](https://img.shields.io/github/contributors/boxxello/My-react-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/boxxello/My-react-portfolio)

### Pull Requests & Issues
![GitHub pull requests](https://img.shields.io/github/issues-pr/boxxello/My-react-portfolio)
![GitHub issues](https://img.shields.io/github/issues/boxxello/My-react-portfolio)
![GitHub closed issues](https://img.shields.io/github/issues-closed/boxxello/My-react-portfolio)

### Commit Activity
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/boxxello/My-react-portfolio)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/boxxello/My-react-portfolio/latest)

### Top Contributors
<a href="https://github.com/boxxello/My-react-portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=boxxello/My-react-portfolio" />
</a>
