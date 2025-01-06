"use client";
import emailjs from "emailjs-com";

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

export async function sendEmail(
  name: string,
  email: string,
  message: string,
  recaptchaToken: string
) {
  const serviceID = "service_w2g1hal";
  const templateID = "template_59a99ew";
  const publicKey = "88xGhvkBO2qILWP8r";

  const params = {
    name,
    reply_email: email,
    message,
    "g-recaptcha-response": recaptchaToken,
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      params,
      publicKey
    );
    return response;
  } catch (error) {
    throw new Error("Email sending failed");
  }
}
