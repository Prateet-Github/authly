import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">About Authly</p>

            <Link
              to="/docs"
              className="text-gray-400 hover:text-purple-400 hover:underline transition-colors"
            >
              Introduction
            </Link>
          </div>

          {/* Download */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Download</p>

            <a
              href="https://github.com/Prateet-Github/authly-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 hover:underline transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.npmjs.com/package/authly-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 hover:underline transition-colors"
            >
              NPM
            </a>
          </div>

          {/* Acknowledgements */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Acknowledgements</p>

            <a
              href="https://github.com/Prateet-Github/authly-sdk/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 hover:underline transition-colors"
            >
              Contributors
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025{" "}
            <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-semibold">
              Authly
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
