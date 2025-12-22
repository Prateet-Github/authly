import { Link, useNavigate } from "react-router-dom";
import { Construction, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-4 text-center relative overflow-hidden">
      
      {/* Background Gradients (Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Icon */}
      <div className="mb-6 relative z-10">
        <div className="relative inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white/5 border border-white/10 shadow-xl">
          <Construction className="h-10 w-10 text-indigo-400 animate-pulse" />
        </div>
      </div>

      {/* Main Text */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 relative z-10">
        <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Coming Soon
        </span>
      </h1>

      <p className="max-w-md text-lg text-slate-400 mb-10 relative z-10 leading-relaxed">
        This page is currently under construction. We are working hard to bring this feature to life. Check back later!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full sm:w-auto">
        <button
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>

        <Link
          to="/"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors font-medium shadow-lg shadow-indigo-500/20"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Footer Text */}
      <div className="mt-12 text-sm text-slate-600 relative z-10 font-mono">
        Error Code: 404_NOT_FOUND
      </div>
    </div>
  );
};

export default NotFound;