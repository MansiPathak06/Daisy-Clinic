import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";  // Assuming Navbar component is in the same directory

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
