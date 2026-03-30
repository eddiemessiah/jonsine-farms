import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonsine Farms | Freshness You Can Trust",
  description: "Your trusted neighborhood plug for the finest poultry and seafood in Isolo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}