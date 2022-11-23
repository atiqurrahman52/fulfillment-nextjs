

import Footer from "../components/navigation/Footer";
import NavBar from "../components/navigation/Navbar";

const BasicLayout = ({children, head}) => {
  return (
    <>

      <NavBar />
         {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
