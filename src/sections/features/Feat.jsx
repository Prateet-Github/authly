import {
  Shield,
  Smartphone,
  Terminal,
  Mail,
  XCircle,
  CheckCircle2,
  Lock,
  Cpu,
  Server,
  RefreshCw,
} from "lucide-react";

const Feat = () => {
  const featureSections = [
    {
      title: "Core Authentication",
      icon: Shield,
      description: "Solid security foundations without the bloat.",
      items: [
        {
          subtitle: "Email & Password Auth",
          points: [
            "Secure password hashing",
            "Email normalization",
            "Explicit verification checks",
            "Account status enforcement",
          ],
          highlightTitle: "You control:",
          highlightItems: [
            "Password rules",
            "Validation logic",
            "Email verification flow",
          ],
        },
        {
          subtitle: "Stateless Access Tokens",
          points: [
            "Short-lived JWT access tokens",
            "Signed and verified on every request",
            "Never stored permanently",
          ],
          highlightTitle: "Designed to:",
          highlightItems: [
            "Expire quickly",
            "Minimize blast radius",
            "Be refreshable automatically",
          ],
        },
        {
          subtitle: "Refresh Token Rotation",
          points: [
            "Long-lived refresh tokens",
            "Rotated on every use",
            "Stored securely server-side",
          ],
          highlightTitle: "Prevents:",
          highlightItems: [
            "Token replay attacks",
            "Stolen token reuse",
            "Silent session hijacking",
          ],
        },
      ],
    },
    {
      title: "Session Management",
      icon: Smartphone,
      description: "Real sessions. Not just 'valid tokens'.",
      items: [
        {
          subtitle: "Real Sessions",
          points: [
            "Authly tracks actual sessions per device",
            "Stores IP, Device Info, Last Used Time",
            "Tracks Creation & Revocation status",
          ],
        },
        {
          subtitle: "Multi-Device Support",
          points: [
            "Stay logged in on multiple devices",
            "View active sessions list",
            "Remote logout specific devices",
            "Global logout functionality",
          ],
        },
        {
          subtitle: "Session Revocation",
          points: [
            "Revoke a single session immediately",
            "Automatic revocation on password reset",
            "Perfect for security dashboards",
          ],
        },
      ],
    },
    {
      title: "SDK Features",
      icon: Terminal,
      description: "A typed, framework-agnostic client.",
      items: [
        {
          subtitle: "Framework Agnostic",
          points: [
            "React, Next.js, Vue, Svelte, Node.js",
            "Works in any environment with fetch",
            "Zero framework lock-in",
          ],
        },
        {
          subtitle: "Automatic Token Refresh",
          points: [
            "Detects expired access tokens",
            "Refreshes tokens silently in background",
            "Retries failed requests automatically",
          ],
        },
        {
          subtitle: "Clean, Typed API",
          points: [
            "Simple methods: login(), register(), me()",
            "Fully typed responses and errors",
            "Predictable return values",
          ],
        },
      ],
    },
    {
      title: "Password Reset & Verification",
      icon: Mail,
      description: "Headless flows for critical actions.",
      items: [
        {
          subtitle: "Headless Email Verification",
          points: [
            "Authly generates secure tokens",
            "You design the UI and send the email",
            "You choose the provider (Resend, SendGrid, etc)",
          ],
        },
        {
          subtitle: "Password Reset Flow",
          points: [
            "Token-based reset logic",
            "Single-use tokens with expiration",
            "Automatic session invalidation on change",
            "No insecure magic links",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* ================= HERO SECTION ================= */}
      <div className="relative pt-10 pb-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            Authly provides authentication{" "}
            <span className="text-white font-medium">infrastructure</span>, not
            abstractions. Every feature exists to give you control, clarity, and
            security.
          </p>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {featureSections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <section.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="text-sm text-slate-500">{section.description}</p>
              </div>
            </div>

            {/* Feature Cards within Section */}
            <div className="flex flex-col gap-4">
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-6 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    {item.subtitle}
                  </h3>

                  {/* Main Points List */}
                  <ul className="space-y-2 mb-4">
                    {item.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <CheckCircle2 className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights (You Control / Prevents) */}
                  {item.highlightTitle && (
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
                        {item.highlightTitle}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.highlightItems.map((hi, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                          >
                            {hi}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= "WHAT WE DO NOT DO" SECTION ================= */}
      <div className="bg-black border-y border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-500/10 mb-6 ring-1 ring-red-500/20">
            <XCircle className="h-8 w-8 text-red-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What Authly Does <span className="text-red-500">NOT</span> Do
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              "No UI components",
              "No hosted dashboards",
              "No email delivery",
              "No database hosting",
              "No SaaS pricing",
            ].map((text, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-red-500/5 border border-red-500/10 flex flex-col items-center justify-center gap-2 text-center"
              >
                <span className="text-red-400 font-medium text-sm">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-2xl font-medium text-slate-300">
            Authly is{" "}
            <span className="text-white underline decoration-indigo-500 decoration-2 underline-offset-4">
              infrastructure
            </span>
            .
            <br />
            <span className="text-slate-500 text-lg mt-2 block">
              You own everything else.
            </span>
          </p>
        </div>
      </div>

      {/* Footer Padding */}
      <div className="h-24"></div>
    </div>
  );
};

export default Feat;
