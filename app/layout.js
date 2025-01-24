import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "../app/context/AuthContext";
import Navbar from "../app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "plan-solo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthContextProvider>
          <Navbar className='z-10'/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
