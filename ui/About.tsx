"use client";

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { LottieRefCurrentProps } from 'lottie-react';
import avatar from '@/assets/avatar.svg';
import backgroundAbout from '@/assets/background.json';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {

    const paragraph1 = "I'm a Frontend Developer with 3+ years of experience building responsive, accessible, and user-focused web applications. My work is driven by a deep passion for clean design, seamless functionality, and solving real-world problems with technology.";
    const paragraph2 = " I enjoy merging creativity with functionality to make technology accessible and impactful. The joy of solving complex problems and transforming them into seamless digital experiences keeps me motivated every day. I develop products that are easy to use and that make people's lives easier.";

    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.4)
        }
    }, []);

    return (
        <section
            className="snap-section section-1 min-h-screen flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-34 relative z-10 items-center py-10 lg:py-0 px-8 lg:px-28 bg-background"
            aria-labelledby="about-title"
            data-section='1'
        >
            <div className="flex flex-col gap-12 justify-start items-start flex-1">
                <motion.h1
                    id="about-title"
                    className="text-3xl lg:text-6xl font-extrabold"
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 80 }}
                >
                    Let's talk <span className="text-primary">about me</span>
                </motion.h1>

                <div className="flex flex-col gap-5 items-start text-lg lg:text-xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4, type: 'spring', stiffness: 80, }}
                        viewport={{ once: true }}
                    >
                        {paragraph1}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4, type: 'spring', stiffness: 80, }}
                        viewport={{ once: true }}
                    >
                        {paragraph2}
                    </motion.p>
                </div>
            </div>

            <motion.div
                className="flex flex-grow flex-1"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4, type: 'spring', stiffness: 80 }}
                viewport={{ once: true }}
            >
                <Image
                    alt="Illustration of a developer representing the author"
                    src={avatar}
                    width={1000}
                    height={1000}
                    priority
                    draggable={false}
                    className="drop-shadow-xl scale-100 sm:scale-90"
                />
            </motion.div>

            <Lottie
                animationData={backgroundAbout}
                lottieRef={lottieRef}
                className="absolute w-full left-0 right-0 -bottom-28 lg:-bottom-52 -z-10 opacity-10"
                aria-hidden="true"
            />
        </section>
    );
}

