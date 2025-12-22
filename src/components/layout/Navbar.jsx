import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../common/Logo";
import { Menu, Github, X } from "lucide-react";
import { FaNpm } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const internalLinks = [
    { label: "Documentation", to: "/docs" },
    { label: "Features", to: "/features" },
    { label: "FAQ", to: "/faq" },
    { label: "Security", to: "/security" },
  ];

  const externalLinks = [
    {
      label: "GitHub",
      href: "https://github.com/your-repo",
      icon: Github,
    },
    {
      label: "NPM",
      href: "https://www.npmjs.com/package/your-package",
      icon: FaNpm,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <Logo size={36} />
          <span className="text-2xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            Authly
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {internalLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="font-semibold text-white/80 transition-colors hover:text-purple-400"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="h-6 w-px bg-white/10" />

          {externalLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-white/80 transition-all hover:text-purple-400"
              >
                <item.icon className="h-6 w-6 hover:scale-110" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute w-full border-t border-white/10 bg-black">
          <ul className="flex flex-col">
            {internalLinks.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-center font-semibold text-white/80 hover:text-purple-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {externalLinks.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 text-white/80 hover:text-purple-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
