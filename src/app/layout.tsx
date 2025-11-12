import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Lato, Raleway, Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Unify Select Health",
  description: "Affordable Healthcare for Everyone",
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Other metadata and links go here */}
        
        <script 
          src="https://www.google.com/recaptcha/api.js?render=6LfV_fsrAAAAAO_8Vxu8iICfCLXWmgKLC73MPQHC" 
          async 
          defer
        ></script>
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${lato.variable} 
          ${raleway.variable} 
          ${montserrat.variable} 
          ${poppins.variable} 
          antialiased
        `}
      >
        <Header />   {/* this will appear on all pages */}
        <main className="">{children}</main> {/* padding so content isn’t hidden under header */}
        <Footer />
      </body>
    </html>
  );
}
