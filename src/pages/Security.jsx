import Navbar from "../components/layout/Navbar";
import Secure from "../sections/security/Secure";
import Footer from "../components/layout/Footer";

const Security = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar></Navbar>
      <Secure></Secure>
      <Footer></Footer>
    </div>
  );
};

export default Security;
