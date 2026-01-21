// ================================================
// GLOBAL IMPORTS
// ================================================
import "./globals.css";
import 'simplebar/dist/simplebar.min.css';
import { ReactNode } from "react";

// ================================================
// COMPONENT IMPORTS
// ================================================
import { ClientThemeProvider } from "@/components/common/ClientThemeProvider";
import Footer from "@/components/common/Footer";
// import WhatsAppButton from "@/components/common/WhatsAppButton";
// 

import Navbar from "@/components/common/NavBar";
// import Splash from '@/components/ui/Splash';
import { getSortedBlogsData } from "@/lib/blogs";
import { Toaster } from "react-hot-toast";
// import AvailabilityBadge from "@/components/common/AvailabilityBadge";

// ================================================
// METADATA (SEO / SOCIAL SHARING)
// ================================================
export const metadata = {
  title: "Mehedi Hasan | Developer, Technical Storyteller & Writer",
  description:
    "Mehedi Hasan is a Full-Stack Developer, Technical Storyteller, and Writer. Explore a portfolio of Next.js, React, TypeScript, Node.js, and modern web applications with case studies and technical articles.",
  keywords: [
    "Mehedi Hasan",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MERN Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Engineer",
    "Software Engineer",
    "Technical Writer",
    "Technical Storyteller",
    "Content Writer",
    "Developer Portfolio",
    "Next.js Portfolio",
    "React Portfolio",
    "Web Application Developer",
    "Full-Stack Web Developer",
    "Software Development Portfolio",
    "Programming Portfolio",
    "Case Study Portfolio",
    "Technical Blog",
    "Coding Case Studies",
    "Web Development Case Studies"
  ],
  authors: [{ name: "Mehedi Hasan" }],
  openGraph: {
    title: "Mehedi Hasan | Full-Stack Developer, Technical Storyteller & Writer",
    description:
      "Portfolio of Mehedi Hasan — Full-Stack Developer, Technical Storyteller, and Writer. Discover Next.js and React projects, case studies, and technical articles.",
    url: "https://mehedi-hasan.me",
    siteName: "Mehedi Hasan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehedi Hasan Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocales: ["en_BD"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan | Full-Stack Developer, Technical Storyteller & Writer",
    description:
      "Portfolio of Mehedi Hasan — Full-Stack Developer, Technical Storyteller, and Writer. Discover Next.js and React projects, case studies, and technical articles.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  icons: { icon: "./favicon.ico" },
};


// ================================================
// ROOT LAYOUT (SERVER COMPONENT)
// ================================================
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // 🔹 Fetch sorted blogs data
  const allBlogsData = await getSortedBlogsData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mehedi Hasan",
              url: "https://m-hasan.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/mehedi-hasan1102",
                "https://github.com/mehedi-hasan1102",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
            }),
          }}
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://m-hasan.vercel.app" />
      </head>

      <body suppressHydrationWarning>
        {/* ================================================
            CLIENT THEME PROVIDER
        ================================================ */}
        <ClientThemeProvider>

          {/* 🔹 Splash Screen */}
          {/* <Splash /> */}

          {/* ================================================
              GLOBAL TOASTER
          ================================================ */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: "transparent",
                boxShadow: "none",
              },
            }}
          />

          {/* ================================================
              PAGE LAYOUT WRAPPER
          ================================================ */}
          <div className="px-2 lg:px-0">
            {/* 🔹 Navbar */}
            <Navbar blogs={allBlogsData} />

            {/* 🔹 Main Content */}
            <main >
              {children}
            </main>

            {/* 🔹 Footer */}
            <Footer />
          </div>

          {/* ================================================
              CLIENT WIDGETS
          ================================================ */}
          {/* <ScrollToTopButton /> */}
          {/* <WhatsAppButton /> */}
          {/* <AvailabilityBadge status="Full-time" /> */}

        </ClientThemeProvider>
      </body>
    </html>
  );
}
