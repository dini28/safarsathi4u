import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    duration?: number;
}

/**
 * Shared AnimatedCounter — renders as an inline <span>.
 * Wrap it in whatever layout you need at the call site.
 */
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    suffix = '',
    duration = 2000,
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const increment = end / (duration / 16);
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

export default AnimatedCounter;
