import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="xl:bg-zinc-300 lg:bg-zinc-300 bg-[#e5e5ee]">
        {children}
      </body>
    </html>
  );
}
