import { ThemeProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Libero - Full stack Developer",
  description: "William Libero - Full stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={"scroll-smooth light"}
      style={{ marginTop: "0px", colorScheme: "light" }}
    >
      <body
        className={
          inter.className + " light light:bg-gray-100 dark dark:bg-slate-900"
        }
      >
        <ThemeProvider>
          <Header />
          {children}
          <section
            id="footerSection"
            className="w-full h-full border-t-2 flex items-center justify-center"
          >
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
