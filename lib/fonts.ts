import { Quattrocento, Newsreader, Fanwood_Text, Karla } from "next/font/google";

export const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const fanwoodText = Fanwood_Text({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-fanwood",
});

export const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});
