import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Breakdown Recovery - ABZ Recovery Service",
  description: "Arrive in less than 15 mins",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rubik.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
