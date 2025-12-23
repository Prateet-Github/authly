import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../sections/home/Hero.jsx";
import PackageInfo from "../sections/home/PackageInfo.jsx";
import Footer from "../components/layout/Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <PackageInfo></PackageInfo>
      <Footer></Footer>
    </div>
  );
};

export default Home;
