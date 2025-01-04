import { Button, Tooltip } from "@nextui-org/react";
import { Facebook, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Footer } from "@/types";
import clsx from "clsx";
import { getContactDetails } from "@/libs/utils";

const socialMedia = [
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/eusebiu-soica/" },
    { name: "GitHub", icon: Github, link: "https://github.com/eusebiu-soica" },
];

const animationVariants = (delay = 0) => ({
    show: { opacity: 1, y: 0, transition: { type: "spring", delay: delay } },
    hidden: { opacity: 0, y: 18 },
});

const iconSize = 22;


export default function SocialMedia({ footer }: Footer) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            className={clsx("flex flex-row w-full justify-start  md:justify-start gap-5")}
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : ""}
            variants={animationVariants(footer ? 0.3 : 0.8)}
        >
            {socialMedia.map(({ name, icon: Icon, link }, index) => (
                <Tooltip
                    key={name}
                    content={name}
                    placement="top"
                    delay={0}
                    closeDelay={0}
                    className="py-2 px-4 text-[#b2e6fb] bg-transparent shadow-xl"
                >
                    <Button
                        as="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        isIconOnly
                        variant="bordered"
                        color="primary"
                        size="md"
                        radius="full"
                        className="hover:text-[#b2e6fb] hover:border-[#b2e6fb]"
                        aria-label={`Visit ${name}`}
                    >
                        <Icon size={iconSize} />
                    </Button>
                </Tooltip>
            ))}
            <Tooltip
                key='email'
                content='Send email'
                placement="top"
                className="py-2 px-4 text-[#b2e6fb] bg-transparent shadow-xl"
                delay={0}
                closeDelay={0}
            >
                <Button
                    as="a"
                    href={`mailto:${getContactDetails('email')}`}
                    isIconOnly
                    variant="bordered"
                    color="primary"
                    size="md"
                    radius="full"
                    className="hover:text-[#b2e6fb] hover:border-[#b2e6fb]"

                    aria-label={`Email me at:${getContactDetails('email')}`}
                >
                    <Mail size={iconSize} />
                </Button>
            </Tooltip>
            <Tooltip
                key='phone'
                content='Call me'
                placement="top"
                className="py-2 px-4 text-[#b2e6fb] bg-transparent shadow-xl"
                delay={0}
                closeDelay={0}
            >
                <Button
                    as="a"
                    href={`tel:${getContactDetails('phone')}`}
                    isIconOnly
                    variant="bordered"
                    color="primary"
                    size="md"
                    radius="full"
                    className="hover:text-[#b2e6fb] hover:border-[#b2e6fb]"

                    aria-label={`Call me at: ${getContactDetails('phone')}`}
                >
                    <Phone size={iconSize} />
                </Button>
            </Tooltip>
        </motion.div>
    );
}
