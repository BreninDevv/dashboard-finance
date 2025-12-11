import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#e5e5ee]">{children}</body>
    </html>
  );
}
