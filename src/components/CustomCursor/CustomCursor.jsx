import React, { useEffect, useState } from 'react';
import { Box, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Convert hex to rgba for animatable colors
  const cursorColor = useColorModeValue(
    'rgba(79, 209, 197, 1)',  // #4FD1C5 in rgba
    'rgba(129, 230, 217, 1)'  // #81E6D9 in rgba
  );
  const transparentColor = 'rgba(79, 209, 197, 0)';
  const glowColor = useColorModeValue(
    'rgba(79, 209, 197, 0.3)',
    'rgba(129, 230, 217, 0.3)'
  );

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

    const updateMousePosition = (e) => {
      // Smoother cursor movement with lerp
      const lerp = (start, end, factor) => start + (end - start) * factor;
      setMousePosition(prev => ({
        x: lerp(prev.x, e.clientX, 0.5),
        y: lerp(prev.y, e.clientY, 0.5)
      }));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [data-clickable]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [data-clickable]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor only on desktop
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  // Don't render custom cursor on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <Box
        as={motion.div}
        position="fixed"
        zIndex={9999}
        pointerEvents="none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: cursorColor,
          boxShadow: `0 0 10px ${glowColor}`,
          borderRadius: '50%',
        }}
        transition={{
          type: 'spring',
          stiffness: 500, // Reduced for smoother movement
          damping: 25,    // Adjusted for better response
          mass: 0.2,      // Lighter for faster movement
        }}
      />

      {/* Cursor ring */}
      <Box
        as={motion.div}
        position="fixed"
        zIndex={9998}
        pointerEvents="none"
        animate={{
          x: mousePosition.x - 14,
          y: mousePosition.y - 14,
          scale: isClicking ? 0.9 : isHovering ? 1.4 : 1,
          borderColor: isHovering ? cursorColor : transparentColor,
        }}
        style={{
          width: '28px',
          height: '28px',
          border: '1.5px solid',
          borderRadius: '50%',
        }}
        transition={{
          type: 'spring',
          stiffness: 400, // Reduced for smoother movement
          damping: 20,    // Adjusted for better response
          mass: 0.2,      // Lighter for faster movement
          borderColor: {
            type: 'tween',
            duration: 0.15 // Faster color transition
          }
        }}
      />

      {/* Glow effect */}
      <Box
        as={motion.div}
        position="fixed"
        zIndex={9997}
        pointerEvents="none"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.4 : 0.15,
        }}
        style={{
          width: '40px',
          height: '40px',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        transition={{
          type: 'spring',
          stiffness: 300, // Reduced for smoother movement
          damping: 15,    // Adjusted for better response
          mass: 0.2,      // Lighter for faster movement
        }}
      />
    </>
  );
};

export default CustomCursor;
