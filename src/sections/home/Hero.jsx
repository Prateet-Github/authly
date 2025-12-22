import { Logo } from "../../components/common/Logo";
import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import {
  FaGoogle,
  FaApple,
  FaMicrosoft,
  FaDiscord,
  FaSlack,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProviderBadge = ({ icon, name }) => (
  <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:border-purple-400/40 transition">
    <span className="text-white/90">{icon}</span>
    <span className="text-white/70 font-medium">{name}</span>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/docs");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-around pb-16">
      {/* Top content */}
      <div className="flex flex-col items-center text-center gap-10 px-4">
        {/* Logo + Title */}
        <div className="flex items-center justify-center">
          <div className="scale-80 md:scale-110">
            <Logo size={90} />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Authly
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl">
          Open-source authentication infrastructure for modern full-stack
          applications.
        </p>

        {/* Actions */}
        <div className="flex gap-4">
          {/* Secondary */}
          <button className="px-6 py-3 cursor-pointer rounded-full border border-purple-400 text-purple-400 font-semibold transition md:hover:bg-purple-400/10">
            Learn More
          </button>

          {/* Primary */}
          <button
            onClick={handleClick}
            className="px-6 py-3 cursor-pointer rounded-full bg-linear-to-r from-purple-400 to-indigo-500 text-white font-semibold transition md:hover:shadow-[0_0_30px_rgba(167,139,250,0.6)]"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Provider carousel */}
      <div className="max-w-5xl mx-auto w-full overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              <ProviderBadge
                icon={<Github className="w-5 h-5" />}
                name="GitHub"
              />
              <ProviderBadge
                icon={<FaGoogle className="w-5 h-5" />}
                name="Google"
              />
              <ProviderBadge
                icon={<Twitter className="w-5 h-5" />}
                name="Twitter"
              />
              <ProviderBadge
                icon={<FaApple className="w-5 h-5" />}
                name="Apple"
              />
              <ProviderBadge
                icon={<FaMicrosoft className="w-5 h-5" />}
                name="Microsoft"
              />
              <ProviderBadge
                icon={<FaDiscord className="w-5 h-5" />}
                name="Discord"
              />
              <ProviderBadge
                icon={<FaSlack className="w-5 h-5" />}
                name="Slack"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Closing statement */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-center">
        <span className="text-4xl md:text-5xl font-extrabold">
          Open Source.
        </span>
        <span className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Full-stack.
        </span>
        <span className="text-4xl md:text-5xl font-extrabold">
          Own Your Data.
        </span>
      </div>
    </section>
  );
};

export default Hero;
