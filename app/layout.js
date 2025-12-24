import "./globals.css";

export const metadata = {
  title: "Rishi Aslaliya | Full Stack Developer",
  description: "Portfolio of Rishi Aslaliya, an AI & Full Stack Developer specializing in Next.js, React, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
