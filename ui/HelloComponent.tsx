"use client";

import { Button } from "@nextui-org/react";
import { Download } from 'lucide-react';
import { useRef } from "react";
import { scrollToSection } from "@/libs/utils";

export default function HelloComponent() {
    const ref = useRef(null);

    return (
        <div className="flex flex-col gap-2 items-center">
            <h1
                className="text-[32px] lg:text-6xl font-extrabold"
                ref={ref}
            >
                Hi there, I'm Eusebiu
            </h1>
            <h2
                className="text-primary text-2xl lg:text-4xl font-bold"
                ref={ref}
            >
                Frontend Developer
            </h2>
            <div
                className="flex flex-col md:flex-row gap-6 mt-12 w-full justify-center"
                ref={ref}
            >
                <Button
                    variant="solid"
                    color="primary"
                    radius="sm"
                    className="text-base px-10 h-12 font-semibold hover:bg-[#b2e6fb] hover:border-[#b2e6fb]"
                    onClick={() => scrollToSection(5)}
                >
                    Let's Talk
                </Button>
                <Button
                    variant="bordered"
                    as="a"
                    href="/cv-eusebiu-soica.pdf"
                    download
                    color="primary"
                    radius="sm"
                    className="text-base px-10 h-12 font-semibold hover:text-[#b2e6fb] hover:border-[#b2e6fb]"
                    startContent={<Download size={22} />}
                >
                    Download CV
                </Button>
            </div>
        </div>
    );
}
