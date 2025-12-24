import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Github,
  BookOpen,
  Layers,
  Zap,
  Shield,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { FaNpm } from "react-icons/fa6";
import { Logo } from "../common/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if we are currently inside the documentation section
  const isDocsPage = location.pathname.startsWith("/docs");

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const mainLinks = [
    { label: "Docs", to: "/docs" },
    { label: "Features", to: "/features" },
    { label: "FAQ", to: "/faq" },
    { label: "Security", to: "/security" },
  ];

  const externalLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Prateet-Github/authly-sdk",
      icon: Github,
    },
    {
      label: "NPM",
      href: "https://www.npmjs.com/package/authly-sdk",
      icon: FaNpm,
    },
  ];

  // Duplicate of Sidebar links for Mobile view context
  const docsLinks = [
    { label: "Introduction", href: "#introduction", icon: BookOpen },
    { label: "Installation", href: "#installation", icon: Terminal },
    { label: "Quick Start", href: "#getting-started", icon: Zap },
    { label: "Authentication", href: "#auth", icon: Shield },
    { label: "Sessions", href: "#sessions", icon: Layers },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md supports-backdrop-filter:bg-[#0a0a0a]/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* --- Left: Brand --- */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <Logo size={50} />

            <span className="font-extrabold hidden md:flex bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-3xl">
              Authly
            </span>
          </Link>

          {/* Breadcrumb / Section Badge (Visible on Desktop) */}
          {isDocsPage && (
            <div className="hidden md:flex items-center text-sm">
              <span className="mx-3 text-slate-600">/</span>
              <span className="font-medium text-slate-200">Docs</span>
            </div>
          )}
        </div>

        {/* --- Center: Desktop Navigation --- */}
        <ul className="hidden md:flex items-center gap-8">
          {mainLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  location.pathname === item.to
                    ? "text-indigo-400"
                    : "text-slate-400"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- Right: External Links & Mobile Toggle --- */}
        <div className="flex items-center gap-4">
          {/* External Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-4">
            {externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-indigo-400 hover:scale-110 transition-colors"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menubar*/}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#0a0a0a] border-b border-white/10 overflow-y-auto md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-6">
            {/* Context: Documentation Links (Only if on Docs page) */}
            {isDocsPage && (
              <div className="space-y-3">
                <div className="px-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  On This Page
                </div>
                <ul className="space-y-1">
                  {docsLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all border border-transparent hover:border-white/5"
                      >
                        <link.icon className="h-4 w-4 text-slate-500" />
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <hr className="border-white/5 my-4" />
              </div>
            )}

            {/* Context: Main Site Navigation */}
            <div className="space-y-3">
              <div className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Menu
              </div>
              <ul className="space-y-1">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="flex items-center justify-between px-3 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all"
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between px-2">
              <span className="text-xs text-slate-500">v1.0.0</span>
              <div className="flex gap-4">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
