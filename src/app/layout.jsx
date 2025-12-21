import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="xl:bg-zinc-400 lg:bg-zinc-400 bg-[#e5e5ee]">
        {children}
      </body>
    </html>
  );
}
