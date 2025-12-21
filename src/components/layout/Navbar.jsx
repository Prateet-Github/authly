import { useState } from "react";
import { Logo } from "../common/Logo";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="p-4 sticky top-0 border-b border-gray-800 z-50">
      <div className="flex w-full justify-between items-center">
        <Logo />
        <button>
          <Menu
            className="md:hidden text-white"
            size={28}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 bg-black w-full flex flex-col items-center md:hidden">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="w-full text-center border-b border-gray-800"
              >
                <a href={item.href} className="block w-full py-2">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
