import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar";

const RootLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
