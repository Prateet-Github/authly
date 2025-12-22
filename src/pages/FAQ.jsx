import Footer from "../components/layout/Footer.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Faqs from "../sections/faq/faqs.jsx";

const FAQ = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar></Navbar>
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
};

export default FAQ;
