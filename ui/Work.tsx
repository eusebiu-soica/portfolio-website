'use client';

import { Button, Chip } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github } from 'lucide-react';
import AngularLogo from "@/assets/angular-icon-1.svg";
import HTML5 from "@/assets/html-1.svg";
import CSS3 from "@/assets/css-3.svg";
import NextJS from "@/assets/next-js.svg";
import ReactLogo from "@/assets/react.svg";
import NextUI from "@/assets/nextui.svg";
import Redux from "@/assets/redux.svg";
import VanillaJS from "@/assets/javascript.svg";
import TailwindCSS from "@/assets/tailwind-css-2.svg";
import Bootstrap from "@/assets/bootstrap-5-1.svg";
import FigmaLogo from "@/assets/figma-icon.svg";
import PostgreSQL from "@/assets/postgresql.svg";
import NodeJS from "@/assets/nodejs-icon.svg";
import Typescript from "@/assets/typescript.svg";
import Monaco from "@/assets/monaco.svg";
import clsx from 'clsx';

const techLogos: Record<string, string> = {
    'Next.js': NextJS,
    'Tailwind CSS': TailwindCSS,
    'React': ReactLogo,
    'Typescript': Typescript,
    'Node.js': NodeJS,
    'VanillaJS': VanillaJS,
    'HTML5': HTML5,
    'CSS3': CSS3,
    'Bootstrap': Bootstrap,
    'NextUI': NextUI,
    'Angular': AngularLogo,
    'Monaco': Monaco,
    'Figma': FigmaLogo,
    'PostgreSQL': PostgreSQL,
    'Redux': Redux
};

const projects = [
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website.',
        link: '/',
        git: '#',
        image: '/portfolio-image.png',
        technologies: ['Next.js', 'React', 'NextUI', 'Tailwind CSS'],
        soon: false
    },
    {
        title: 'UpiLine - Online Code Editor',
        description: 'A lightweight, live preview code editor.',
        link: 'https://upi-line.netlify.app/',
        image: '/upiline.png',
        git: 'https://github.com/eusebiu-soica/upi-line',
        technologies: ['Angular', 'Bootstrap', 'Monaco'],
        soon: false

    },
    {
        title: 'Upi Line - SVG Downloader',
        description: 'Plugin designed to simplify downloading SVG files.',
        link: 'https://www.figma.com/community/plugin/1394949439792837336/upi-line-svg-downloader',
        image: '/upilinesvg.png',
        git: 'https://github.com/eusebiu-soica/upi-line-figma-plugin',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        soon: false

    },
    {
        title: 'Clar Cleaning',
        description: 'Website presenting Clar cleaning services.',
        link: 'https://www.clarcleaning.ro/',
        image: '/clar-cleaning.png',
        git: 'https://github.com/eusebiu-soica/clar-cleaning',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        soon: false

    },
    {
        title: 'Soica Prest Funerare',
        description: 'Funeral services. Presentation website.',
        link: 'https://soica-prest-funerare.netlify.app/',
        image: '/funeral-services.png',
        git: 'https://github.com/eusebiu-soica/funeral-website',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        soon: false

    },
    {
        title: 'Task management app',
        description: 'Task management app and todo lists.',
        link: '#',
        image: '/task management.png',
        git: '#',
        technologies: ['Next.js', 'React', 'Redux', 'NextUI', 'Tailwind CSS', 'PostgreSQL'],
        soon: true
    },
];

export default function Projects() {
    return (
        <section data-section='4' className="snap-section overflow-x-hidden min-h-screen flex flex-col gap-16 relative w-full items-start px-8 lg:px-28 py-24 bg-background">
            <div className="z-10">
                <h1 className="text-3xl lg:text-6xl font-extrabold">
                    Notable <span className="text-primary">Projects</span>
                </h1>
            </div>

            <div
                className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-between items-end"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative py-4 bg-[#0A1E2E] rounded-2xl shadow-xl w-full group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, type: 'spring', stiffness: 80, duration: 0.3 }}
                        whileHover={{ scale: 1.01, transition: { duration: 0.1, type: 'spring', stiffness: 80 } }}
                    >
                        <div className="relative pt-0 pb-0 pl-4 pr-0 flex items-end justify-end">
                            {project.soon && (
                                <Chip className="absolute top-2 right-2" color="warning" size="md" radius="sm">
                                    Coming soon
                                </Chip>
                            )}
                            <Image
                                alt="Project image"
                                className="object-cover w-full !h-52 pointer-events-none"
                                src={project.image}
                                layout="responsive"
                                width={16}
                                height={9}
                                draggable={false}
                                style={{ borderRadius: '16px 0 0 16px' }}
                            />
                        </div>

                        <div
                            className="overflow-visible pt-4 px-4"
                        >
                            <h4 className="font-bold text-large">{project.title}</h4>
                            <p className="text-sm text-gray-400">{project.description}</p>

                            <div className="flex flex-row justify-between items-end mt-6">
                                <div className="pt-2 flex flex-row gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <div key={techIndex} className="flex justify-between items-center bg-slate-700 w-8 h-8 p-1.5 rounded-full">
                                            <Image
                                                alt={tech}
                                                src={techLogos[tech]}
                                                className="rounded-full pointer-events-none"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <Button
                                        as="a"
                                        href={project.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        isIconOnly
                                        variant="bordered"
                                        color="primary"
                                        size="sm"
                                        radius="full"
                                        aria-label={`Visit ${project.title} github`}

                                        className={clsx('hover:text-[#b2e6fb] hover:border-[#b2e6fb]', { 'pointer-events-none': project.soon })}
                                    >
                                        <Github size={20} />
                                    </Button>
                                </div>
                            </div>
                            <Button
                                as="a"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                                radius='sm'
                                variant="solid"
                                color="primary"
                                className={clsx('font-medium mt-4 hover:bg-[#b2e6fb] hover:border-[#b2e6fb]', { 'pointer-events-none': project.soon })}
                            >
                                Visit project
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
