"use client"
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);
    const [particleCount, setParticleCount] = useState(100);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setParticleCount(30);
            } else {
                setParticleCount(100);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined): Promise<void> => { console.log(container); }, []);

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },

                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        value: particleCount,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

    )
        ;
};