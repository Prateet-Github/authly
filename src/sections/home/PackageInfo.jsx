import CodeBlock from "../../components/ui/Codeblock";
import { Link } from "react-router-dom";

const PackageInfo = () => {
  return (
    <section className="w-full border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get started with Authly
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Authly is a headless authentication system that gives you full
            control over users, sessions, and security — without vendor lock-in.
          </p>
        </div>

        {/* Install + Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Install */}
          <div>
            <p className="text-sm text-slate-400 mb-3">
              Install the JavaScript SDK
            </p>
            <CodeBlock
              code={`npm install authly`}
              fileName="terminal"
              language="bash"
            />
            <p className="text-xs text-slate-500 mt-3">
              Requires an Authly-compatible backend.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-4">
            {[
              "Self-hosted authentication backend",
              "Secure JWT + refresh token rotation",
              "Real session management across devices",
              "Framework-agnostic JavaScript SDK",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-500" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Docs CTA */}
        <div className="mt-12">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
          >
            Read the documentation →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
