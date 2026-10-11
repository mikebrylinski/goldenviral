import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Viral | Premium Dubai Chocolate",
  description:
    "Discover Golden Viral, a Dubai-inspired chocolate experience featuring bold pistachio, kunafa, and indulgent chocolate creations.",
  openGraph: {
    title: "Golden Viral | Premium Dubai Chocolate",
    description:
      "Discover Golden Viral, a Dubai-inspired chocolate experience featuring bold pistachio, kunafa, and indulgent chocolate creations.",
    type: "website",
    locale: "en_US",
    siteName: "Golden Viral",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Viral | Premium Dubai Chocolate",
    description:
      "Discover Golden Viral, a Dubai-inspired chocolate experience featuring bold pistachio, kunafa, and indulgent chocolate creations.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-ivory">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
