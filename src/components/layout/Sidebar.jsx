import { BookOpen, Terminal, Shield, Layers, Key, Zap } from "lucide-react";

const Sidebar = () => {
  const menuGroups = [
    {
      label: "Getting Started",
      items: [
        { label: "Introduction", href: "#introduction", icon: BookOpen },
        { label: "Installation", href: "#installation", icon: Terminal },
        { label: "Quick Start", href: "#getting-started", icon: Zap },
      ],
    },
    {
      label: "API Reference",
      items: [
        { label: "Authentication", href: "#auth", icon: Shield },
        { label: "Sessions", href: "#sessions", icon: Layers },
        { label: "Password Reset", href: "#password-reset", icon: Key },
      ],
    },
  ];

  return (
    <aside className="h-full w-full bg-black border-r border-white/5 flex flex-col">
      {/* --- Navigation --- */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {menuGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 px-2   uppercase tracking-wider font-bold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              {group.label}
            </h3>

            <div className="flex flex-col space-y-1">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-white/5 hover:text-indigo-400"
                >
                  <item.icon className="h-4 w-4 text-slate-600 transition-colors group-hover:text-indigo-400" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
