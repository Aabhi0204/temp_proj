import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (disabled) return;
    const el = textRef.current;
    if (!el) return;

    gsap.set(el, { backgroundPositionX: '0%' });
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(el, {
      backgroundPositionX: '200%',
      duration: speed,
      ease: 'power1.inOut',
    });
    return () => tl.kill();
  }, [disabled, speed]);

  return (
    <span
      ref={textRef}
      className={`shiny-text ${className}`}
      style={{
        background: 'linear-gradient(90deg, #fff, #f0f, #0ff, #fff)',
        backgroundSize: '200% 100%',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
