"use client";

import About from "@/ui/About";
import Contact from "@/ui/Contact";
import Experience from "@/ui/Experience";
import Footer from "@/ui/Footer";
import HomeComponent from "@/ui/Home";
import Skills from "@/ui/Skills";
import Work from "@/ui/Work";
export default function Home() {
  return (
    <div className="h-screen ">
      <HomeComponent />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

