import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavigationBar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  console.log("children", children);
  return (
    <>
      <Navbar />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
