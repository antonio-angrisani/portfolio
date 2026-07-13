import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: {
    default: "Antonio Angrisani | Fintech Product Leader",
    template: "%s | Antonio Angrisani",
  },
  description:
    "Executive personal website for Antonio Angrisani, a fintech product leader known for building and scaling consumer finance products including Monzo Flex.",
  openGraph: {
    title: "Antonio Angrisani | Fintech Product Leader",
    description:
      "Building consumer fintech products used by millions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
