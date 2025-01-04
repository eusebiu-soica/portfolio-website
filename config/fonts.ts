import { Fira_Code as FontMono, Murecho as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-murecho",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

