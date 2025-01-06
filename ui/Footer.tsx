"use client"
import { Card, CardBody } from "@nextui-org/react";
import SocialMedia from "./SocialMediaComponent";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Opacity } from "@tsparticles/engine";




export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [year, setYear] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const y = new Date().getFullYear()
        setYear(y)
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    const animationVariants = (delay = 0) => ({
        show: isMobile? {opacity: 1, y:0, transition: {delay: 0, duration: 0}} : { opacity: 1, y: 0, transition: { type: "spring", delay: delay } },
        hidden: isMobile? {opacity: 1, y:0} : { opacity: 0, y: 18 },
    });

    return (
        <Card className="bg-[#0A1E2E] overflow-hidden px-4 py-3 md:px-24" radius="none">
            <CardBody className="flex flex-col-reverse md:flex-row-reverse justify-between items-center overflow-hidden">
                <motion.div ref={ref}
                    initial="hidden"
                    animate={isInView ? "show" : ""}
                    variants={animationVariants(0.3)} 
                    className="flex justify-end text-xs sm:text-sm font-light mt-7 md:mt-0">© {year} by Eusebiu Șoica. All rights reserved.

                </motion.div>
                <div className="flex flex-1 justify-end">
                    <SocialMedia footer />
                </div>
            </CardBody>
        </Card>
    )
}