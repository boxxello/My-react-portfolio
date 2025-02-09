
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
│   └── Resume/         # Resume components
├── App.jsx             # Root component
└── Routes.jsx          # Application routing
```

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
