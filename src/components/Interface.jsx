import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { motion } from "framer-motion";

export const Interface = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollData = useScroll();

    useFrame(() => {
        setHasScrolled(scrollData.offset > 0);
    });
    return (
        <div className="interface">
            <div className="sections">
                <section className="section --bottom">
                    <motion.div
                        className='scroll-down'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hasScrolled ? 0 : 1 }}
                    >
                        <motion.div
                            className='scroll-down-wheel'
                            initial={{ translateY: 0 }}
                            animate={{ translateY: 4 }}
                            transition= {{
                                duration: 0.5,
                                repeatDelay: 0.5,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        >
                        </motion.div>
                    </motion.div>
                </section>
                <section className="section">
                    {/* <motion.div
                        whileInView={"visible"}
                        initial={{ opacity: 0 }}
                        variants={{
                            visible: { opacity: 1 }
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                        }}
                    >
                        about
                    </motion.div> */}
                </section>
                <section className="section">
                    
                </section>
                <section className="section">
                    
                </section>
            </div>
        </div>
    );
};