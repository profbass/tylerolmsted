import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Skills = () => {
    const data = useMemo(() => [
        { label: 'Technical Direction', percentage: 100 },
        { label: 'Product Development', percentage: 100 },
        { label: 'Lean Startup Strategy', percentage: 100 },
        { label: 'Consumer-Focused Innovation', percentage: 100 },
        { label: 'Adaptive Agile', percentage: 100 },
    ], []);

    return (
        <div className="w-full pl-0 pt-10">
            {data.map((item, index) => (
                <SkillBarItem key={index} item={item} />
            ))}
        </div>
    );
};

const SkillBarItem = ({ item }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="pt-6" ref={ref}>
            <div className="flex items-end justify-between">
                <h4 className="font-header3 font-semibold uppercase text-black">{item.label}</h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                    <CountUp end={inView ? item.percentage : 0} duration={2} />
                    %
                </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <motion.div 
                    className="h-3 rounded-full bg-coral"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${item.percentage}%` : 0 }}
                    transition={{ duration: 2, ease: "easeOut" }} // Added a 2-second delay here
                ></motion.div>
            </div>
        </div>
    );
};

export default Skills;
