"use client";

import { fontSans } from "@/config/fonts";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "@/libs/utils";
import { Menu, X } from "lucide-react";

const animationVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
};

const menuVariants = {
  closed: {
    opacity: 0,
    x: 0,
    display: 'none',
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    x: 0,
    display: 'flex',
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -60 },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Header() {
  const ref = useRef(null);
  const controls = useAnimation();
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const menuItems = [
    { label: "Home", section: 0 },
    { label: "About", section: 1 },
    { label: "Experience", section: 2 },
    { label: "Skills", section: 3 },
    { label: "Work", section: 4 },
    { label: "Contact", section: 5 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      document.body.getBoundingClientRect().top !== 0 ? setIsTop(false) : setIsTop(true);
    };

    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute("data-section") || "0", 10);
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      controls.start("closed");
    } else {
      controls.start("open");
    }
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (section: any) => {
    scrollToSection(section);
    controls.start("closed");
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={clsx("nav flex justify-between items-center py-8 px-8 lg:px-28 z-50 fixed top-0 w-full")}
      ref={ref}
      initial="hidden"
      animate="show"
      style={{
        paddingTop: isTop ? "2rem" : "1rem",
        paddingBottom: isTop ? "2rem" : "1rem",
        backgroundColor: isTop && !menuOpen ? "transparent" : "#081B29",
        boxShadow: isTop ? "none" : "0 8px 10px rgba(7, 24, 36, 1)",
        transition: "all 0.3s ease",
      }}
      variants={animationVariants}
      role="navigation"
    >
      <p className={clsx("font-extrabold text-2xl lg:text-3xl italic", [fontSans.className])}>
        <span onClick={() => { scrollToSection(0); }} className="cursor-pointer" role="link" aria-label="Home">
          ES<span className="text-primary">.</span>
        </span>
      </p>
      <div className="hidden lg:flex">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={activeSection === item.section ? "solid" : "light"}
            onPress={() => scrollToSection(item.section)}
            className={clsx(
              "hover:text-primary !bg-transparent font-medium text-md",
              [fontSans.className],
              activeSection === item.section && "text-primary"
            )}
            aria-label={`Go to ${item.label}`}
            role="menuitem"
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          name="Menu"
          className="text-white text-3xl mt-2"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls="menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <motion.div
          initial="closed"
          animate={controls}
          variants={menuVariants}
          className="absolute top-0 -z-10 left-0 w-full h-screen bg-[#081B29] space-y-5 flex flex-col items-center justify-center"
          id="menu"
          role="menu"
          aria-hidden={!menuOpen}
        >
          {menuItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Button
                onPress={() => closeMenu(item.section)}
                className={clsx(
                  "hover:text-primary !bg-transparent font-semibold text-xl mb-4",
                  activeSection === item.section && "text-primary"
                )}
                aria-label={`Go to ${item.label}`}
                role="menuitem"
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
}
