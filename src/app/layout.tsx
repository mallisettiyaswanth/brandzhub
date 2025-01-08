import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Wrapper from "@/context/wrapper";
import QueryWrapper from "../wrapper/QueryWrapper";

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
        <QueryWrapper>
          <body className={poppins.className}>{children}</body>
        </QueryWrapper>
      </Wrapper>
    </html>
  );
}
