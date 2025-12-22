import { BookOpen, Terminal, Shield, Layers, Key, Zap } from "lucide-react";

const Sidebar = () => {
  // Grouped links to match the Docs sections
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
    <aside className="h-full w-full bg-[#0a0a0a] border-r border-white/5 flex flex-col">
      
      {/* --- Sidebar Header --- */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
            <span className="font-bold text-white text-xs">A</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Authly
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/5 ml-auto">
            v1.0
          </span>
        </div>
        <p className="text-xs text-slate-500 font-medium">Developer Documentation</p>
      </div>

      {/* --- Navigation --- */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {menuGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
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

      {/* --- Footer / Support Link --- */}
      <div className="p-4 border-t border-white/5">
        <a 
          href="#" 
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors border border-white/5"
        >
          <span>Need Help?</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;