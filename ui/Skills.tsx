"use client";

import AngularLogo from "@/assets/angular-icon-1.svg";
import HTML5 from "@/assets/html-1.svg";
import CSS3 from "@/assets/css-3.svg";
import NextJS from "@/assets/next-js.svg";
import ReactLogo from "@/assets/react.svg";
import NextUI from "@/assets/nextui.svg";
import Redux from "@/assets/redux.svg";
import VanillaJS from "@/assets/javascript.svg";
import RestAPI from "@/assets/api.svg";
import TailwindCSS from "@/assets/tailwind-css-2.svg";
import Bootstrap from "@/assets/bootstrap-5-1.svg";
import MobileWeb from "@/assets/responsive.svg";
import FigmaLogo from "@/assets/figma-icon.svg";
import PostgreSQL from "@/assets/postgresql.svg";
import JQuery from "@/assets/jquery-4.svg";
import Postman from "@/assets/postman.svg";
import NodeJS from "@/assets/nodejs-icon.svg";
import GIT from "@/assets/git-icon.svg";
import Azure from "@/assets/azure-2.svg";
import Jira from "@/assets/jira-1.svg";
import Tech from "@/assets/background-experience.json";
import Typescript from "@/assets/typescript.svg";
import Dx from "@/assets/dx.svg";
import Monaco from "@/assets/monaco.svg";

import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Skills() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const skills = [
        { name: "React", icon: ReactLogo },
        { name: "Next.js", icon: NextJS },
        { name: "Redux", icon: Redux },
        { name: "TypeScript", icon: Typescript },
        { name: "Vanilla.js", icon: VanillaJS },
        { name: "JQuery", icon: JQuery },
        { name: "Angular", icon: AngularLogo },
        { name: "NodeJS", icon: NodeJS },
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "NextUI", icon: NextUI },
        { name: "Tailwind CSS", icon: TailwindCSS },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "DevExtreme", icon: Dx },
        { name: "CSS3", icon: CSS3 },
        { name: "HTML5", icon: HTML5 },
        { name: "Git", icon: GIT },
        { name: "Monaco Editor", icon: Monaco },
        { name: "Azure", icon: Azure },
        { name: "RESTful API", icon: RestAPI },
        { name: "Postman", icon: Postman },
        { name: "Responsive", icon: MobileWeb },
        { name: "Figma", icon: FigmaLogo },
        { name: "Jira", icon: Jira },
        { name: "More soon ..." },
    ];

    const getRandomDelay = () => (isMobile ? 0 : Math.random() * 1);

    return (
        <section
            data-section="3"
            className="snap-section min-h-max flex flex-col gap-16 relative items-start overflow-hidden px-8 lg:px-28 py-24 bg-background"
        >
            <div className="z-10">
                <h1 className="text-3xl lg:text-6xl font-extrabold">
                    <span className="text-primary">Tech</span> Arsenal
                </h1>
            </div>
            <Lottie
                animationData={Tech}
                className="absolute lg:rotate-90 bottom-0 -top-20 right-0 left-0 z-0 opacity-50"
            />

            <div className="flex justify-center md:justify-start flex-wrap gap-7 sm:gap-4">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        initial={isMobile ?{opacity: 1} : { opacity: 0, y: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: isMobile ? 0 : 0.5,
                                delay: getRandomDelay(),
                            },
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: isMobile ? 1 : 1.1,
                            rotate: isMobile ? 0 : 2,
                            transition: isMobile
                                ? { duration: 0 }
                                : { type: "bounce", stiffness: 300, damping: 10, duration: 0.1 },
                        }}
                        className={clsx(
                            "relative flex flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg shadow-lg bg-[#091E2E] hover:bg-primary overflow-hidden",
                            "transition-transform duration-150"
                        )}
                    >
                        <div className="z-10 flex flex-col items-center gap-4">
                            {skill.icon && (
                                <div className="text-3xl text-primary">
                                    <Image
                                        draggable={false}
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-8 h-8"
                                    />
                                </div>
                            )}
                            <span className={clsx("text-white font-medium text-sm text-center")}>
                                {skill.name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
