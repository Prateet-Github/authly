const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">About Authly</p>
            <p className="text-gray-400 hover:text-purple-400 hover:underline transition-colors cursor-pointer">
              Introduction
            </p>
          </div>

          {/* Download */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Download</p>
            <p className="text-gray-400 hover:text-purple-400 hover:underline transition-colors cursor-pointer">
              GitHub
            </p>
            <p className="text-gray-400 hover:text-purple-400 hover:underline transition-colors cursor-pointer">
              NPM
            </p>
          </div>

          {/* Acknowledgements */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Acknowledgements</p>
            <p className="text-gray-400 hover:text-purple-400 hover:underline transition-colors cursor-pointer">
              Contributors
            </p>
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
