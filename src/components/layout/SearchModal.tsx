import { useState, useEffect, useRef } from "react";
import { X, Search as SearchIcon } from "lucide-react";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setPage: (page: string) => void;
};

const SITE_CONTENT = [
  { id: 1, title: "Soroban-ZK-Std", description: "A Zero-Knowledge standard implementation for Stellar, featuring highly optimized WASM execution and audited primitives.", page: "projects", category: "Project" },
  { id: 2, title: "iwallet", description: "A secure, modern wallet solution for seamless asset management and on-chain interactions.", page: "projects", category: "Project" },
  { id: 3, title: "Infrastructure-first", description: "We build the boring, essential pieces—so teams can move faster with confidence.", page: "why", category: "Pillar" },
  { id: 4, title: "Developer-centric", description: "APIs, SDKs, and docs designed for clarity. No ceremony, just tools that work.", page: "why", category: "Pillar" },
  { id: 5, title: "Production-ready", description: "Security, performance, and operability considered from day one.", page: "why", category: "Pillar" },
  { id: 6, title: "Composable", description: "Each project stands alone, but the stack works even better together.", page: "why", category: "Pillar" },
  { id: 7, title: "Open collaboration", description: "Monochrome branding, transparent roadmaps, and community input.", page: "why", category: "Pillar" },
  { id: 8, title: "Sui-native", description: "Optimized for the Sui ecosystem, with interoperability in mind.", page: "why", category: "Pillar" },
  { id: 9, title: "Contact Us", description: "Tell us about your use-case. We reply within 48 hours.", page: "contact", category: "Page" },
  { id: 10, title: "Home", description: "Building the impossible, quietly.", page: "home", category: "Page" }
];

export function SearchModal({ isOpen, onClose, setPage }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const lowerQuery = query.toLowerCase();
  const results = query 
    ? SITE_CONTENT.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery) || 
        item.category.toLowerCase().includes(lowerQuery)
      ) 
    : SITE_CONTENT.slice(0, 5);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-2xl bg-neutral-90 border border-neutral-70 shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-neutral-70">
          <SearchIcon className="text-brand-light" size={20} />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-white font-mono placeholder-neutral-40 px-4 py-4 focus:outline-none"
            placeholder="SEARCH NESLABS..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-neutral-40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((res) => (
              <button
                key={res.id}
                onClick={() => {
                  setPage(res.page);
                  onClose();
                }}
                className="w-full text-left p-4 hover:bg-black group flex flex-col gap-1 transition-colors border-b border-neutral-70/50 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-white group-hover:text-brand-light transition-colors">{res.title}</span>
                  <span className="text-xs uppercase font-mono tracking-widest text-neutral-40 border border-neutral-70 px-2 py-0.5 rounded-full">{res.category}</span>
                </div>
                <span className="text-sm font-sans text-neutral-40 line-clamp-1">{res.description}</span>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-neutral-40 font-mono text-sm uppercase tracking-widest">
              No results found for "{query}"
            </div>
          )}
        </div>
        <div className="bg-black border-t border-neutral-70 p-2 text-center text-xs text-neutral-40 font-mono tracking-widest uppercase">
          Press ESC to close
        </div>
      </div>
    </div>
  );
}
