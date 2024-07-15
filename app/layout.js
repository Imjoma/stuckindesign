import { Antonio } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MouseFollower from "@/components/MouseFollower";

const antonio = Antonio({ subsets: ["latin"] });

export const metadata = {
  title: "Stuck in Design",
  description:
    "Some of the untold stories about my UX/UI designs that haven't been shared online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <div className="relative lg:h-screen">
          <MouseFollower>
            <div className="flex space-y-14 lg:space-y-0 flex-col lg:items-center lg:justify-between lg:h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </MouseFollower>
        </div>
      </body>
    </html>
  );
}
