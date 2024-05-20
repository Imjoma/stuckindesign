import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stuck in Design",
  description: "Some of my UX/UI design process that didn't reach the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* MouseFollower */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
