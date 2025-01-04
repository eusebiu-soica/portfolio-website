'use client'
import { Button, Link } from "@nextui-org/react";
import { Download } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import { scrollToSection } from "@/libs/utils";
import clsx from "clsx";

const className = 'text-base px-10 h-12 font-semibold';

const animationVariants = (delay = 0) => ({
    show: { opacity: 1, y: 0, willChange: "transition, opacity", transition: { type: 'spring', delay: delay } },
    hidden: { opacity: 0, y: 18, willChange: "transition, opacity" },
});

export default function HelloComponent() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});


    return (
        <div className="flex flex-col gap-2 items-center">
            <motion.h1 className="text-[32px] lg:text-6xl font-extrabold"
                ref={ref}
                initial="hidden"
                animate={isInView ? 'show' : ''}
                variants={animationVariants(0.2)}
            >Hi there, I'm Eusebiu</motion.h1>
            <motion.h2 className="text-primary text-2xl lg:text-4xl font-bold"
                ref={ref}
                initial="hidden"
                animate={isInView ? 'show' : ''}
                variants={animationVariants(0.4)}
            >Frontend Developer</motion.h2>
            <motion.div className="flex flex-col justify-center md:flex-row gap-6 mt-20 md:mt-12 w-full z-10"
                ref={ref}
                initial="hidden"
                animate={isInView ? 'show' : ''}
                variants={animationVariants(0.6)}
            >
                <Button variant="solid" color='primary' radius="sm" className={clsx('hover:bg-[#b2e6fb] hover:border-[#b2e6fb]', [className])} onPress={()=>{scrollToSection(5)}}>Let's Talk</Button>
                <Button variant="bordered" as={Link} isExternal download='cv-eusebiu-soica.pdf' href='/cv-eusebiu-soica.pdf' color='primary' radius="sm" className={clsx('hover:text-[#b2e6fb] hover:border-[#b2e6fb]', [className])} startContent={<Download size={22} />}>Download CV</Button>
            </motion.div>
        </div>
    );
}
