import fs from 'fs';
import path from 'path';

// Simply copy the SVG file to the different sizes
const sizes = ['16x16', '32x32'];
const inputSvg = path.resolve('public/logo.svg');
const outputDir = path.resolve('public');

function generateFavicons() {
    try {
        // Read the SVG file
        const svgContent = fs.readFileSync(inputSvg, 'utf8');
        
        // Copy SVG for each size
        sizes.forEach(size => {
            const [width, height] = size.split('x').map(Number);
            const sizedSvg = svgContent.replace(
                'width="16" height="16"',
                `width="${width}" height="${height}"`
            );
            fs.writeFileSync(
                path.join(outputDir, `favicon-${size}.svg`),
                sizedSvg
            );
        });

        // Copy original SVG as favicon.ico replacement
        fs.copyFileSync(inputSvg, path.join(outputDir, 'favicon.ico'));

        console.log('Favicon generation completed successfully!');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

generateFavicons();
