"use client";

import "../../app/globals.css";
import { LanguageProvider } from "../i18n/languageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:text-white xl:dark:bg-[#0B0E14] lg:dark:bg-[#202433] dark:bg-[#151722] xl:bg-zinc-300 lg:bg-zinc-300 bg-[#F8FAFC]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
