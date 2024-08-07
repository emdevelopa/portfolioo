import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import SocialHanger from "./components/hanger/hanger";
import Box from "./components/animatedBox/box";
import Footer from "./components/footer/footer";

// const firaCode = Fira_Code({ subsets: ["latin"] }); // Importing Fira Code

export const metadata = {
  title: "EM-DEV",
  description: "my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SocialHanger />
        <Box />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
