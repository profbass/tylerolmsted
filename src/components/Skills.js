import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { LoadingContext } from '../utils/LoadingContext';

const data = [
    { label: 'Product Vision', percentage: 100, key: 1 },
    { label: 'Iterative Development', percentage: 100, key: 2 },
    { label: 'Lean Startup Strategy', percentage: 100, key: 3 },
    { label: 'Continuous Innovation', percentage: 100, key: 4 },
    { label: 'Shipping Often', percentage: 100, key: 5 },
]

const SkillBarItem = ({ item }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const { loadingComplete } = useContext(LoadingContext)

    useEffect(() => {
        if (inView && loadingComplete) {
            // mainControls.start("visible")
        }
    }, [inView, loadingComplete])

    return (
        <div className="pt-6" ref={ref}>
            <div className="flex items-end justify-between">
                <h4 className="font-header3 font-semibold text-off-black">{item.label}</h4>
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
                    transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
            </div>
        </div>
    )
}

const Skills = () => {

    return (
        <div className="w-full pl-0 pt-10">
            {data.map((item, index) => (
                <SkillBarItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Skills;
