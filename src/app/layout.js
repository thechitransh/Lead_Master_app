"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { FormProvider } from "./formContext/form.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lead Master",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
      <FormProvider>
      {children}
        </FormProvider>
      </body>
    </html>
  );
}
