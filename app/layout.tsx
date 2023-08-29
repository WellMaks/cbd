import Navbar from "@/components/Navbar";
import MiniNavbar from "@/components/MiniNavbar";
import Logo from "@/components/Logo";
import "./globals.css";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <html lang="en">
        <body>
          <MiniNavbar />
          <Logo />
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;
