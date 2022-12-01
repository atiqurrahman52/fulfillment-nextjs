import Head from "next/head";
import Footer from "../components/navigation/Footer";
import NavBar from "../components/navigation/Navbar";

const BasicLayout = ({ children, head }) => {
  return (
    <>
      <Head>
        <title>{head ? head : "Packme"}</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
