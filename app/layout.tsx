import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/react";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Header from "@/ui/Header";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth bg-secondary">
      <head>
        <meta name="theme-color" content="#00acf1" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Eusebiu Șoica | Modern web design and development. Crafting responsive, user-friendly websites with attention to detail and passion." />
        <meta name="keywords" content="Eusebiu Șoica, web design, portfolio, web development, front-end development, modern websites, user experience, responsive design" />
        <meta name="author" content="Eusebiu Șoica" />
        <meta name="robots" content="index, follow" />
  
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eusebiusoica.com" />
        <meta property="og:title" content="Eusebiu Șoica | Portfolio" />
        <meta property="og:description" content="Explore my portfolio of modern, responsive websites and discover how I can help bring your digital ideas to life." />
        <meta property="og:image" content="https://www.eusebiusoica.com/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://www.eusebiusoica.com/" />
        <meta name="twitter:title" content="Eusebiu Șoica | Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio of modern, responsive websites and discover how I can help bring your digital ideas to life." />
        <meta name="twitter:image" content="https://www.eusebiusoica.com/og-image.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.eusebiusoica.com" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className={clsx("relative flex flex-col h-dvh", [fontSans.className])}>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
  
}
