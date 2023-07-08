"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import UserContext from "./userContext";
import { useState } from "react";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={[user, setUser]}>
          <Navbar />
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
