import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "DiAtom Technologies",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
