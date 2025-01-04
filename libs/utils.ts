'use client';
export const scrollToSection = (index: number) => {
  const sections = document.querySelectorAll(".snap-section");
  const offset =
    document.body.getBoundingClientRect().top === 0
      ? (document.querySelector(".nav")?.getBoundingClientRect().height ||
          104) - 35
      : document.querySelector(".nav")?.getBoundingClientRect().height;

  const currentPath = window.location.pathname;
  const validPaths = ["/"];
  if (!validPaths.includes(currentPath)) {
    window.location.assign("/");
    return;
  }

  if (sections[index]) {
    const sectionTop =
      sections[index].getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - (offset || 80),
      behavior: "smooth",
    });
  }
};

export const getContactDetails = (type: string) => {
  if (type === "email") return "eusebiusoica20.es@gmail.com";
  if (type === "phone") return "+40761046483";
};
