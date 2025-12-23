import {
  Lock,
  ShieldCheck,
  Key,
  RefreshCw,
  Server,
  Eye,
  Fingerprint,
  AlertTriangle,
  CheckCircle2,
  Shield,
} from "lucide-react";

const Secure = () => {
  const securityPillars = [
    {
      title: "Password Security",
      icon: Lock,
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20",
      sections: [
        {
          heading: "Password Hashing",
          items: [
            "Passwords never stored in plain text",
            "Secure hashing algorithms used",
            "Hashing happens server-side only",
          ],
        },
        {
          heading: "Reset Safety",
          items: [
            "Random, single-use tokens",
            "Strict time limits on validity",
            "Global session revocation on reset",
          ],
        },
      ],
    },
    {
      title: "Token Security",
      icon: Key,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
      sections: [
        {
          heading: "Access Tokens",
          items: [
            "Short-lived by design",
            "Minimizes leakage impact",
            "Never stored long-term",
          ],
        },
        {
          heading: "Token Rotation",
          items: [
            "Refresh tokens rotated on usage",
            "Old tokens invalidated instantly",
            "Replay attacks prevented",
          ],
        },
      ],
    },
    {
      title: "Session Security",
      icon: Fingerprint,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      sections: [
        {
          heading: "Device Aware",
          items: [
            "Records IP & User Agent",
            "Tracks specific device types",
            "Logs activity timestamps",
          ],
        },
        {
          heading: "Revocation",
          items: [
            "Granular (single device) logout",
            "Global (all devices) logout",
            "Forced cleanup on suspicious events",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30">
      {/*  HERO  */}
      <div className="pt-10 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10">
   

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Security
            </span>
          </h1>
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
          Authly is built around{" "}
          <span className="text-white">explicit security boundaries</span>.
          Nothing is hidden, abstracted, or silently handled.
        </p>
      </div>

      {/* CORE PILLARS  */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityPillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Pillar Header */}
              <div
                className={`p-4 rounded-xl border ${pillar.bg} ${pillar.border}`}
              >
                <div className="flex items-center gap-3">
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                  <h2 className="text-xl font-bold text-white">
                    {pillar.title}
                  </h2>
                </div>
              </div>

              {/* Pillar Content */}
              <div className="space-y-8">
                {pillar.sections.map((section, sIdx) => (
                  <div key={sIdx} className="pl-4 border-l border-white/10">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                      {section.heading}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infra */}
      <div className="bg-black border-y border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left: Philosophy */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  Infrastructure
                </h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Authly assumes a <strong>Shared Responsibility Model</strong>.
                We provide the secure primitives, but you own the environment.
              </p>

              <div className="p-5 rounded-lg bg-[#0f0f0f] border border-white/10">
                <h3 className="text-sm font-bold text-white mb-4 uppercase">
                  Authly Assumes:
                </h3>
                <ul className="space-y-2">
                  {[
                    "You deploy securely (HTTPS)",
                    "You protect environment variables",
                    "You secure your database",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Email Security */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Email Verification
                </h2>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Authly <span className="text-white">does not</span> send emails
                automatically. This prevents misconfigured SMTP issues and
                deliverability problems.
              </p>

              <div className="p-5 rounded-lg bg-[#0f0f0f] border border-white/10">
                <h3 className="text-sm font-bold text-white mb-4 uppercase">
                  You Control:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Providers", "Domains", "Templates", "Compliance"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency */}
      <div className="py-24 px-6 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 mb-6">
          <Eye className="w-8 h-8 text-slate-200" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-6">
          What Authly Does Not Hide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            "No silent token storage",
            "No background magic",
            "No hidden network calls",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-white/10 bg-[#0a0a0a] text-slate-300 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-lg text-slate-500">
          Everything is{" "}
          <span className="text-white underline decoration-indigo-500 decoration-2 underline-offset-4">
            explicit
          </span>{" "}
          and{" "}
          <span className="text-white underline decoration-indigo-500 decoration-2 underline-offset-4">
            auditable
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Secure;
