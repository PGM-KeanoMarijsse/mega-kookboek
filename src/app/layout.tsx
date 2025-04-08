import "./globals.css";
import Header from "@/components/header/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
