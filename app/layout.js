import "./globals.css";

export const metadata = {
  title: "Game Live",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <body className="bg-gradient-to-br from-[#2c2626] to-[#04040a] min-h-lvh bg-black bg-cover"
      >
        {children}
      </body>
    </html >
  );
}
