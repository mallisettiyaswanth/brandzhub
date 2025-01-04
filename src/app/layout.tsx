import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Wrapper from "@/context/wrapper";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "brandZhub",
  description: "Keep it simple and Stylish!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />
      <Wrapper>
        <body className={poppins.className}>{children}</body>
      </Wrapper>
    </html>
  );
}
