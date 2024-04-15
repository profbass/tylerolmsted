import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


export default function ScrollingTagline() {

    return (
        <ParallaxProvider>       
        <section 
            id="scrollingTagline" 
            className="lg:my-60 xs:my-20"
        >
            <div className="w-full lg:h-56 xs:h-26 overflow-hidden relative">
                <Parallax speed={-20}>
                <div 
                    className="relative inset-0 z-0 w-screen"
                >
                    <motion.div
                        className="text-off-black text-vw-xl font-bold leading-extra-tight uppercase w-100vw"
                        style={{
                            marginTop: "-30px",
                            width:"1000vw"
                        }}
                        animate={{ 
                            x: ["0vw", "-1000vw", "0vw"],
                            transition: { 
                                ease: "linear",
                                duration: 300, 
                            },
                            yoyo: Infinity,
                            loop: Infinity,
                        }} 
                    >
                        Do <span className="text-yellow">you</span> ever find yourself <span className="text-secondary">reading</span> the same text <span className="text-yellow">over and</span> <span className="text-primary">over again</span> and not really <span className="text-yellow">over and</span> <span className="text-secondary">understanding</span> what it means
                        But <span className="text-yellow">then</span> you <span className="text-primary">read it again</span> and it makes <span className="text-secondary">perfect</span> sense but when you <span className="text-secondary">try to explain</span> it to someone else it doesn't <span className="text-secondary">make sense</span> anymore?
                    </motion.div>
                </div>
                </Parallax>
            </div>
            <div className="w-full lg:h-56 xs:h-26 overflow-hidden relative">
            <Parallax speed={-20}>
            <div 
                className="relative inset-0 z-0 w-screen"
            >
                <motion.div
                    className="text-off-black text-vw-xl font-bold leading-extra-tight uppercase w-100vw"
                    style={{
                        marginTop: "-30px",
                        width:"1000vw"
                    }}
                    animate={{ 
                        x: ["-1000vw", "0", "-1000vw"],
                        transition: { 
                            ease: "linear",
                            duration: 300, 
                        },
                        yoyo: Infinity,
                        loop: Infinity,
                    }} 
                >
                    Do <span className="text-yellow">you</span> ever find yourself <span className="text-secondary">reading</span> the same text <span className="text-yellow">over and</span> <span className="text-primary">over again</span> and not really <span className="text-yellow">over and</span> <span className="text-secondary">understanding</span> what it means
                    But <span className="text-yellow">then</span> you <span className="text-primary">read it again</span> and it makes <span className="text-secondary">perfect</span> sense but when you <span className="text-secondary">try to explain</span> it to someone else it doesn't <span className="text-secondary">make sense</span> anymore?
                </motion.div>
            </div>
            </Parallax>
            </div>
        </section>
        </ParallaxProvider>
    )
}