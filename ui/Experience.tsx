"use client"
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Experience() {
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (i: any) => ({ opacity: 1, y: 0, transition: { type: "spring", delay: i * 0.2, duration: 0.8 } })
    }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <section data-section='2' className="snap-section min-h-screen flex flex-col gap-16 relative items-start px-4 lg:px-28 py-24 bg-background">
            <div className="px-5 lg:px-0">

                <h1 className="text-3xl lg:text-6xl font-extrabold">
                    My <span className="text-primary">experience</span>
                </h1>

            </div>
            <motion.div animate={isInView ? 'visible' : 'hidden'} initial="hidden" variants={cardVariants} ref={ref} className="flex flex-col lg:flex-row w-full flex-grow gap-7 lg:gap-14 z-10">
                <Card className="flex-1 shadow-[0_0_80px_30px_rgba(7, 24, 36, 1)] p-4 bg-[#091E2E]">
                    <CardHeader className="flex justify-between items-center">
                        <p className="font-semibold text-lg lg:text-xl">GambIT Digital S.R.L</p>
                        <p className="text-sm lg:text-base">2022 - present</p>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-7">
                        <div>
                            <p className="text-base lg:text-lg font-medium">Credit Europe Bank Project:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>Implemented user-friendly workflows, reducing client onboarding time by 25% and improving data management processes.</li>
                                <li>Enhanced UI reusables components for better usability and seamless integration with back-end systems.</li>
                                <li className="my-1">Tools: {['HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'SQL', 'DevExtreme', 'Figma'].map((item) => { return <Chip className="m-1" size="sm" key={item} variant="flat">{item}</Chip> })}</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-medium">Admiral Money Project:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>Implemented of secure, scalable front-end systems, ensuring compliance with industry standards.</li>
                                <li>Designed and optimized workflows to simplify complex processes, aligning with business goals.</li>
                                <li>Tools: {['HTML5', 'CSS3', 'Bootstrap', 'JQuery', 'SQL', 'DevExtreme', 'RESTful API', 'Figma'].map((item) => { return <Chip className="m-1" size="sm" key={item} variant="flat">{item}</Chip> })}</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-medium">Custom Banking Software Solutions:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>I created custom front-end solutions with RESTful API integration.</li>
                                <li>Focused on maintainability, scalability, and a mobile-first design for modern banking workflows.</li>
                                <li>Collaborate closely with UI designers to ensure accurate implementation.</li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>

                <Card className="flex-1 shadow-[0_0_80px_30px_rgba(7, 24, 36, 1)] p-4 bg-primary text-[#061622]">
                    <CardHeader className="flex justify-between items-center">
                        <p className="font-semibold text-lg lg:text-xl">Freelencer</p>
                        <p className="text-sm lg:text-base">2021 - present</p>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-7">
                        <div>
                            <p className="text-base lg:text-lg font-medium">Web Development for Clar Cleaning:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>Built a fully responsive website based on Figma designs, ensuring a pixel-perfect implementation.</li>
                                <li>Contributed to increasing the company's online visibility through SEO and strategic web design.</li>
                                <li className="my-1">Tools: {['HTML5', 'CSS3', 'Bootstrap', 'Figma'].map((item) => { return <Chip className="m-1 text-[#061622] bg-[#0098d5]" size="sm" key={item} variant="flat">{item}</Chip> })}</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-medium">Custom Website Design and Development:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>Designed and developed a bespoke website for a local business, combining creative design and user-focused functionality.</li>
                                <li>Achieved a 50%+ increase in online sales and visibility through targeted promotions and optimized user experience. </li>
                                <li className="my-1">Tools: {['HTML5', 'CSS3', 'Bootstrap'].map((item) => { return <Chip className="m-1 text-[#061622] bg-[#0098d5]" size="sm" key={item} variant="flat">{item}</Chip> })}</li>

                            </ul>
                        </div>
                        <div>
                            <p className="text-base lg:text-lg font-medium">Current Freelance Projects:</p>
                            <ul className="list-disc ml-3.5 lg:ml-6 text-base font-normal mt-2 lg:mt-0">
                                <li>Developing a task management application with streamlined workflows and dynamic task updates.</li>
                                <li>Creating an online editor for content collaboration and customization.</li>
                                <li className="my-1">Tools: {['NextJS', 'NextUI', 'React', 'Redux', 'PostgreSQL', 'npm', 'Angular', 'Tailwind', 'Figma'].map((item) => { return <Chip className="m-1 text-[#061622] bg-[#0098d5]" size="sm" key={item} variant="flat">{item}</Chip> })}</li>

                            </ul>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </section>
    );
}