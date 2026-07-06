import { Mail, Twitter } from "lucide-react";

type FooterProps = {
  page: string;
};

export function Footer({ page }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-neutral-70 bg-black text-white py-16 px-6 lg:px-12">
      <div className="max-w-[2048px] mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-40 font-mono gap-6">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <span className="uppercase tracking-widest text-xs text-white">
            © {new Date().getFullYear()} neslabs
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:build@neslabs.io"
              className="hover:text-brand-light transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">build@neslabs.io</span>
            </a>
            <a
              href="https://x.com/nes_labs"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-brand-light transition-colors flex items-center gap-2 ${page === "contact" ? "text-brand-light" : ""}`}
            >
              <Twitter size={16} />
              <span className="hidden sm:inline">@nes_labs</span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-6">
          <a
            href="https://explorer.sui.io/address/@neslabs?network=mainnet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-70 rounded-full hover:bg-brand-light hover:border-brand-light hover:text-black transition-all uppercase tracking-widest text-xs"
          >
            Buy us a coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
