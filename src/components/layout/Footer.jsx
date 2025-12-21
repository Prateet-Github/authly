const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800 bottom-0 w-full flex flex-col items-center gap-4 p-4">
      <div className="w-full flex gap-6 flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <p>About Authly</p>
          <p className="hover:underline cursor-pointer hover:text-purple-400 transition-colors">
            Introduction
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Download</p>
          <p className="hover:underline cursor-pointer hover:text-purple-400 transition-colors">
            GitHub
          </p>
          <p className="hover:underline cursor-pointer hover:text-purple-400 transition-colors">
            NPM
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Acknowledgements</p>
          <p className="hover:underline  cursor-pointer hover:text-purple-400 transition-colors">
            Contribuotor
          </p>
        </div>
      </div>
      <div className="w-full text-center">
        <p>© 2025 Authly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
