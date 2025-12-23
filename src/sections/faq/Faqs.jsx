import { HelpCircle, Mail, Server, X, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Faqs = () => {
  const faqCategories = [
    {
      title: "General",
      items: [
        {
          q: "What is Authly?",
          a: (
            <>
              <p className="mb-2">
                Authly is a headless authentication system consisting of:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-400">
                <li>A self-hosted backend</li>
                <li>A JavaScript SDK</li>
              </ul>
              <p className="mt-2">
                It provides authentication logic, sessions, and security
                primitives.
              </p>
            </>
          ),
        },
        {
          q: "Is Authly an auth SaaS?",
          a: (
            <>
              <span className="font-bold text-red-400">No.</span> Authly is not
              a hosted service. You run the backend yourself.
            </>
          ),
        },
        {
          q: "Is Authly free?",
          a: (
            <>
              <span className="font-bold text-emerald-400">Yes.</span>{" "}
              Publishing and using Authly is free.
            </>
          ),
        },
        {
          q: "Is Authly production-ready?",
          a: (
            <>
              <span className="font-bold text-emerald-400">
                Yes — when deployed correctly.
              </span>{" "}
              Authly is infrastructure, not a managed service.
            </>
          ),
        },
      ],
    },
    {
      title: "Technical",
      items: [
        {
          q: "Do I need to deploy a backend?",
          a: (
            <>
              <span className="font-bold text-emerald-400">Yes.</span> Authly
              does not work without a backend server.
            </>
          ),
        },
        {
          q: "Can I use Authly without cloning the backend repo?",
          a: (
            <>
              <span className="font-bold text-red-400">No.</span> You must run
              an Authly-compatible backend.
            </>
          ),
        },
        {
          q: "Does Authly provide UI components?",
          a: (
            <>
              <span className="font-bold text-red-400">No.</span> Authly does
              not provide forms, pages, or styles.
            </>
          ),
        },
        {
          q: "Can I customize token expiry?",
          a: (
            <>
              <span className="font-bold text-emerald-400">Yes.</span> Token
              lifetimes are fully controlled by the backend configuration.
            </>
          ),
        },
        {
          q: "Does Authly support OAuth?",
          a: (
            <>
              <span className="font-bold text-slate-200">Not currently.</span>{" "}
              Authly focuses purely on secure email/password authentication.
            </>
          ),
        },
      ],
    },
    {
      title: "Email & Communication",
      items: [
        {
          q: "Does Authly send verification emails?",
          a: (
            <>
              <span className="font-bold text-red-400">No.</span> Authly
              generates tokens. You send the emails using your preferred
              provider.
            </>
          ),
        },
        {
          q: "Why doesn't Authly send emails?",
          a: (
            <>
              <p className="mb-2">Because infrastructure varies:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-400">
                <li>Email providers differ (Resend, SES, SendGrid)</li>
                <li>Templates differ</li>
                <li>Domains & Compliance differ</li>
              </ul>
              <p className="mt-2 text-sm italic">
                Authly avoids forcing email infrastructure on you.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* HERO */}
      <div className="pt-10 pb-12 px-6 max-w-7xl mx-auto border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 ">
          <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            FAQ
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Common questions about Authly's philosophy, architecture, and
          limitations.
        </p>
      </div>

      {/*  FAQ GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-6">
              {/* Category Header */}
              <h2 className="text-xl font-bold text-white flex items-center gap-2  pb-2">
                {catIdx === 0 && (
                  <HelpCircle className="w-5 h-5 text-indigo-400" />
                )}
                {catIdx === 1 && <Server className="w-5 h-5 text-indigo-400" />}
                {catIdx === 2 && <Mail className="w-5 h-5 text-indigo-400" />}
                {category.title}
              </h2>

              {/* Questions */}
              <div className="flex flex-col gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h3 className="font-semibold text-white mb-3 text-lg leading-tight">
                      {item.q}
                    </h3>
                    <div className="text-slate-400 text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  "WHO SHOULD NOT USE" SECTION */}
      <div className="bg-black border-y border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* NOT FOR YOU */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <X className="text-red-500" />
                Who should <span className="text-red-500">NOT</span> use Authly?
              </h3>
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                <p className="text-slate-300 mb-4">
                  Authly is not for you if you want:
                </p>
                <ul className="space-y-3">
                  {[
                    "Hosted dashboards",
                    "Built-in UI components",
                    "Zero backend setup",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-red-200/80"
                    >
                      <X className="w-4 h-4 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IS FOR YOU */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Check className="text-emerald-500" />
                The Trade-off
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-white/10">
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Authly Gives You
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>Control</li>
                    <li>Ownership</li>
                    <li>Transparency</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-white/10">
                  <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Authly Removes
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>Vendor lock-in</li>
                    <li>Hidden logic</li>
                    <li>Pricing traps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Ready to build?</h2>
        <Link
          to="/docs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-all font-medium"
        >
          Read the Docs <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Faqs;
