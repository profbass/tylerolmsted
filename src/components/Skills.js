import React, { useEffect, useRef, useMemo, useState } from 'react';
import CountUp from 'react-countup';

const Skills = () => {
    const [animate, setAnimate] = useState(false);

    const data = useMemo(() => [
        { label: 'Strategic Vision', percentage: 100 },
        { label: 'Technical Leadership', percentage: 100 },
        { label: 'Lean Startup Methodologies', percentage: 100 },
        { label: 'Application Development', percentage: 100 },
    ], []);

    const graphRefs = useRef([]);

    useEffect(() => {
        const animateGraph = (index) => {
            const bar = graphRefs.current[index];
            const width = data[index].percentage + '%';
            bar.style.width = width;
        };
    
        const observers = graphRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateGraph(index);
                        setTimeout(() => setAnimate(true), 0);
                        observer.unobserve(entry.target);
                    }
                });
            });
    
            observer.observe(ref);
    
            return observer;
        });
    
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [data]);

    return (
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            {data.map((item, index) => (
                <div className="pt-6" key={index}>
                    <div className="flex items-end justify-between">
                        <h4 className="font-header3 font-semibold uppercase text-black">{item.label}</h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                            <CountUp end={animate ? item.percentage : 0} duration={2} />
                            %
                        </h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila" ref={el => graphRefs.current[index] = el}>
                        {/* Animate the width */}
                        <div className={`h-3 rounded-full bg-coral ${animate ? 'animate-width' : ''}`} style={{ width: `${animate ? item.percentage : 0}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;