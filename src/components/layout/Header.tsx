import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

type HeaderProps = {
  page: string;
  setPage: (page: string) => void;
};

export function Header({ page, setPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-[24px] border-b border-neutral-70 transition-all">
      <div className="mx-auto flex w-full max-w-[2048px] items-center justify-between px-6 lg:px-12 py-4 lg:py-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 group h-8">
          <span className="text-xl lg:text-2xl font-bold font-mono tracking-tighter text-white group-hover:text-brand-light transition-colors">
            neslabs
          </span>
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-mono uppercase tracking-wide">
          {["projects", "why", "contact"].map((navItem) => (
            <button 
              key={navItem}
              onClick={() => setPage(navItem)} 
              className={`relative py-2 group ${page === navItem ? "text-brand-light" : "text-white"}`}
            >
              <span className="relative z-10 group-hover:text-brand-light transition-colors">
                {navItem === "why" ? "why neslabs" : navItem}
              </span>
            </button>
          ))}
          <a 
            href="https://slides.neslabs.io/" 
            className="relative py-2 group text-white"
          >
            <span className="relative z-10 group-hover:text-brand-light transition-colors">
              slides
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            onClick={() => setSearchOpen(true)}
            className="hidden lg:flex items-center gap-2 px-4 py-2 border border-neutral-70 rounded-full text-sm font-mono text-white hover:border-brand-light hover:bg-brand-light hover:text-white transition-all"
          >
            <Search size={16} />
            <span>search</span>
          </button>
          
          <button className="lg:hidden text-white hover:text-brand-light transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-70 px-6 py-4 flex flex-col gap-4 font-mono uppercase text-sm">
          <button onClick={() => { setPage("projects"); setMenuOpen(false); }} className="text-left text-white hover:text-brand-light py-2 border-b border-neutral-80">projects</button>
          <button onClick={() => { setPage("why"); setMenuOpen(false); }} className="text-left text-white hover:text-brand-light py-2 border-b border-neutral-80">why neslabs</button>
          <button onClick={() => { setPage("contact"); setMenuOpen(false); }} className="text-left text-white hover:text-brand-light py-2 border-b border-neutral-80">contact</button>
          <a href="https://slides.neslabs.io/" className="text-left text-white hover:text-brand-light py-2">slides</a>
        </div>
      )}
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} setPage={setPage} />
    </header>
  );
}
