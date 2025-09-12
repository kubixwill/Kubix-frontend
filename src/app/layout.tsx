import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import StyledComponentsRegistry from "./Registry";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kubix",
  description: "Empowering Students, Parents, and Educators to Navigate the Future of Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
       <body className={dmSans.variable}>
       <StyledComponentsRegistry>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
