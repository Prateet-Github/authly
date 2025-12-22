import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react'; // Assuming you use lucide-react or generic icons

const CodeBlock = ({ code, fileName = "example.js", language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8 overflow-hidden bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl">
      
      {/* --- Header / Title Bar --- */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex items-center gap-2">
          {/* Optional: Mac-style window dots */}
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <span className="text-xs font-medium text-gray-400 font-mono">
            {fileName}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors rounded hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Clipboard size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* --- Code Content --- */}
      <div className="p-4 overflow-x-auto">
        <pre className={`font-mono text-sm leading-relaxed text-gray-300 language-${language}`}>
          <code>
             {/* NOTE: For real syntax highlighting (colors), 
                you would typically wrap this children content 
                with a library like 'react-syntax-highlighter' 
                or 'prismjs'. 
                
                Below is a raw render for the UI structure.
             */}
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;