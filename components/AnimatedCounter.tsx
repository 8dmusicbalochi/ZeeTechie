import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const totalDuration = duration;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / totalDuration, 1);
      
      const currentCount = Math.floor(percentage * (endValue - start) + start);
      setCount(currentCount);

      if (progress < totalDuration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endValue); // Ensure it ends on the exact number
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (observer && ref.current) {
        observer.disconnect();
      }
    };
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
