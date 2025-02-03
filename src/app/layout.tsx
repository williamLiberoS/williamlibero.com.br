import { ThemeProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Libero - Full stack Developer",
  description: "William Libero - Full stack Developer",
};
function TrackingCode() {
  return (
    <>
      <Script type="text/javascript" strategy="beforeInteractive">
        {`(function(c,l,a,r,i,t,y){
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q4a4vt8g0p");`}
      </Script>
    </>
  );
}

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
      {TrackingCode()}
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
