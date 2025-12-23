import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="dark:text-white xl:dark:bg-[#202433] lg:dark:bg-[#202433] dark:bg-[#151722] xl:bg-zinc-300 lg:bg-zinc-300 bg-[#e5e5ee]">
        {children}
      </body>
    </html>
  );
}
