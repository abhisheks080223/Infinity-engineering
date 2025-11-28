export const metadata = {
  title: "Infinity Engineerings",
  description: "Company Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen text-black">{children}</body>
    </html>
  );
}
