import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import "design-system-zeroz/src/app/styles.scss";
import Layout from "./(layout)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IECLB - EV",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-company="IECLB">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
