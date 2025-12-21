import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/sections/home/Hero.jsx";
import Footer from "../components/layout/Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
