import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#f7f7fe]">{children}</body>
    </html>
  );
}
