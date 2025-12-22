import Sidebar from "../../components/layout/Sidebar";
import CodeBlock from "../../components/ui/Codeblock";

const Docs = () => {
  // --- Code Strings (Unchanged) ---
  const initCode = `import { AuthlyClient } from "authly";

const authly = new AuthlyClient({
  baseUrl: "https://api.yourapp.com/api",
});`;

  const registerCode = `await authly.register({
  email: "user@example.com",
  name: "John Doe",
  password: "strongpassword",
});`;

  const loginCode = `const user = await authly.login({
  email: "user@example.com",
  password: "strongpassword",
});`;

  const meCode = `const me = await authly.me();`;
  const sessionsCode = `const sessions = await authly.getSessions();`;
  const logoutCode = `await authly.logout();`;
  const logoutAllCode = `await authly.logoutAll();`;

  const passwordResetRequest = `import { requestPasswordReset } from "authly";

await requestPasswordReset(authly["http"], {
  email: "user@example.com",
});`;

  const passwordResetConfirm = `import { confirmPasswordReset } from "authly";

await confirmPasswordReset(authly["http"], {
  token: "RESET_TOKEN",
  newPassword: "newPassword123",
});`;

  return (
    <div className="flex h-screen bg-black text-slate-200 overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Sidebar - Fixed on the left */}
      <div className="hidden md:flex flex-col w-64 border-r border-white/5 bg-[#0a0a0a]">
        <Sidebar />
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto scroll-smooth relative">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
          {/* Header */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="md:text-5xl text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400">
              Documentation
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Learn how to integrate Authly's headless authentication into your
              application.
            </p>
          </header>

          {/* ================= INTRODUCTION ================= */}
          <section id="introduction" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>

            <div className="space-y-6 text-slate-300 leading-7">
              <p>
                Authly is a{" "}
                <span className="font-semibold text-white">
                  headless authentication system
                </span>{" "}
                for modern applications. It provides a clean, framework-agnostic
                API to interact with an Authly-compatible backend.
              </p>

              {/* Feature List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "Self-hosted authentication backend",
                  "JavaScript SDK for frontend & Node.js",
                  "Secure JWT + refresh token rotation",
                  "Real session management across devices",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Warning/Info Callout */}
              <div className="my-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                  Important Concept
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Authly is not a UI library. Authly is not an auth SaaS.{" "}
                  <strong>Authly is infrastructure.</strong>
                </p>
                <div className="text-sm text-slate-400">
                  You fully own:
                  <span className="text-slate-200 ml-1">
                    Users, Database, Email flow, Deployment, Security decisions.
                  </span>
                </div>
              </div>

              {/* Architecture Grid */}
              <h3 className="text-xl font-bold text-white mt-10 mb-4">
                How Authly Works
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/10">
                  <div className="text-indigo-400 text-xs font-mono mb-2 uppercase tracking-wider">
                    The Backend
                  </div>
                  <h4 className="font-bold text-white mb-2">Authly Server</h4>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                    <li>Stores users</li>
                    <li>Hashes passwords</li>
                    <li>Issues tokens</li>
                    <li>Tracks sessions</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/10">
                  <div className="text-purple-400 text-xs font-mono mb-2 uppercase tracking-wider">
                    The Client
                  </div>
                  <h4 className="font-bold text-white mb-2">Authly SDK</h4>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                    <li>Calls backend APIs</li>
                    <li>Stores tokens</li>
                    <li>Auto-refreshes tokens</li>
                    <li>Exposes methods</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/10">
                  <div className="text-emerald-400 text-xs font-mono mb-2 uppercase tracking-wider">
                    The Developer
                  </div>
                  <h4 className="font-bold text-white mb-2">You</h4>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                    <li>Design UI</li>
                    <li>Send emails</li>
                    <li>Deploy backend</li>
                    <li>Define policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-white/5 my-12" />

          {/* ================= INSTALLATION ================= */}
          <section id="installation" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Installation</h2>
            <div className="space-y-4">
              <p className="text-slate-400">Install the Authly SDK via npm:</p>
              <CodeBlock
                code={`npm install authly`}
                fileName="terminal"
                language="bash"
              />
              <p className="text-sm text-slate-500 italic mt-2">
                Note: You must also run an Authly-compatible backend. Authly
                does not work without a server.
              </p>
            </div>
          </section>

          {/* ================= BACKEND SETUP ================= */}
          <section id="backend-setup" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Backend Setup (Required)
            </h2>

            <div className="space-y-6 text-slate-400 leading-7">
              <p>
                Authly is a{" "}
                <span className="text-white font-semibold">
                  headless authentication system
                </span>
                . The JavaScript SDK does not include a backend.
              </p>

              <p>
                Before using the Authly SDK, you must deploy an
                Authly-compatible server.
              </p>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-sm text-red-300">
                  The SDK will not work without a running backend.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8">
                Option 1: Self-host Authly Server (Recommended)
              </h3>

              <p>Clone the official Authly server repository:</p>

              <CodeBlock
                code={`git clone https://github.com/Prateet-Github/authly-server
cd authly-server
npm install`}
                fileName="terminal"
                language="bash"
              />

              <p>
                Create a <code className="text-indigo-400">.env</code> file:
              </p>

              <CodeBlock
                code={`PORT=5001
MONGO_URI=your_mongodb_url
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret`}
                fileName=".env"
                language="env"
              />

              <p>Start the server:</p>

              <CodeBlock
                code={`npm run dev`}
                fileName="terminal"
                language="bash"
              />

              <p className="text-sm text-slate-500">
                Your Authly API will now be available at:
                <br />
                <span className="text-white font-mono">
                  http://localhost:5001/api
                </span>
              </p>
            </div>
          </section>

          {/* ================= GETTING STARTED ================= */}
          <section id="getting-started" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Getting Started
            </h2>
            <p className="text-slate-400 mb-4">
              Initialize the client in your application entry point:
            </p>
            <CodeBlock
              code={initCode}
              fileName="auth.ts"
              language="typescript"
            />
          </section>

          {/* ================= AUTH FLOWS ================= */}
          <section id="auth" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Authentication
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-indigo-500">#</span> Register
                </h3>
                <CodeBlock code={registerCode} fileName="register.ts" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-indigo-500">#</span> Login
                </h3>
                <CodeBlock code={loginCode} fileName="login.ts" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-indigo-500">#</span> Get Current User
                </h3>
                <CodeBlock code={meCode} fileName="me.ts" />
              </div>
            </div>
          </section>

          {/* ================= SESSIONS ================= */}
          <section id="sessions" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Sessions</h2>
            <p className="text-slate-400 mb-6">
              Authly automatically tracks real sessions across devices. You can
              list them to build "Devices" settings pages.
            </p>

            <div className="space-y-10">
              <CodeBlock code={sessionsCode} fileName="sessions.ts" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Logout Current
                  </h3>
                  <CodeBlock code={logoutCode} fileName="logout.ts" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Logout All Devices
                  </h3>
                  <CodeBlock code={logoutAllCode} fileName="logoutAll.ts" />
                </div>
              </div>
            </div>

            {/* ================= REVOKE SESSION ================= */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Logout from a Specific Device
              </h3>

              <p className="text-slate-400 mb-4">
                Authly allows you to revoke a single session without logging the
                user out everywhere. This is useful for “Devices” or “Security”
                settings pages.
              </p>

              <CodeBlock
                code={`const sessions = await authly.getSessions();

// Revoke a specific session by ID
await authly.revokeSession(sessions[1].id);`}
                fileName="revoke-session.ts"
                language="typescript"
              />

              <div className="mt-4 p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
                <p className="text-sm text-slate-400">
                  Revoking a session immediately invalidates its refresh token.
                  The affected device will be logged out on its next request.
                </p>
              </div>
            </div>
          </section>

          {/* ================= PASSWORD RESET ================= */}
          <section id="password-reset" className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Password Reset
            </h2>
            <p className="text-slate-400 mb-6">
              Since Authly is headless, it provides the primitives (tokens)
              while you handle the email delivery UI/UX.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  1. Request Reset
                </h3>
                <CodeBlock
                  code={passwordResetRequest}
                  fileName="forgot-password.ts"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  2. Confirm Reset
                </h3>
                <CodeBlock
                  code={passwordResetConfirm}
                  fileName="reset-password.ts"
                />
              </div>
            </div>
          </section>

          {/* ================= FINAL NOTES ================= */}
          <section id="notes" className="pb-24 border-t border-white/5 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Final Notes</h2>
            <ul className="space-y-3 text-slate-400">
              {[
                "Authly does not send emails for you",
                "You own the backend database",
                "You control all auth policies (who can login, when tokens expire)",
                "No vendor lock-in",
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Docs;
