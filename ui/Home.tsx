'use client'
import HelloComponent from "@/ui/HelloComponent";
import ParticlesBackground from "@/ui/Particles";
import SocialMedia from "@/ui/SocialMediaComponent";

export default function HomeComponent() {
    return (
        <section className="snap-section min-h-full" data-section='0'>
            <div className="relative flex flex-col justify-between items-center px-8 sm:px-28 bg-background">
                <ParticlesBackground />
                <div className="flex flex-col justify-center items-center z-10 h-dvh">
                    <HelloComponent />
                <div className="z-10 absolute left-1/2 -translate-x-1/2 lg:left-28 lg:translate-x-0 bottom-5">
                    <SocialMedia />
                </div>
                </div>
            </div>
        </section>
    );

}