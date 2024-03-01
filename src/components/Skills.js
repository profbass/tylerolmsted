
import React, { useEffect, useRef, useMemo, useState } from 'react';

const Skills = () => {
    const graphRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const data = useMemo(() => [
        { label: 'Strategic Vision', percentage: 100 },
        { label: 'Technical Leadership', percentage: 100 },
        { label: 'Lean Startup Methodologies', percentage: 100 },
        { label: 'Application Development', percentage: 50 },
    ], []);

    useEffect(() => {
        const animateGraph = () => {
            const graphBars = graphRef.current.querySelectorAll('.h-3');

            graphBars.forEach((bar, index) => {
                const width = data[index].percentage + '%';
                bar.style.width = width;
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(graphRef.current);

        return () => {
            observer.disconnect();
        };
    }, [data]); // Include 'data' in the dependency array

    return (
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            {data.map((item, index) => (
                <div className="pt-6" key={index}>
                    <div className="flex items-end justify-between">
                        <h4 className="font-header3 font-semibold uppercase text-black">{item.label}</h4>
                        <h3 className="font-body text-3xl font-bold text-primary">{animate ? item.percentage : 0}%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        {/* Animate the width */}
                        <div className={`h-3 rounded-full bg-coral ${animate ? 'animate-width' : ''}`} style={{ width: `${animate ? item.percentage : 0}%` }}></div>
                    </div>
                </div>
            ))}
            <div ref={graphRef}></div>
        </div>
    );
};

export default Skills;


