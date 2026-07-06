import { motion } from "framer-motion";
import { ProjectCard } from "../components/shared/ProjectCard";

export function HomeSection() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      {/* HERO */}
      <section className="relative w-full bg-brand-light text-white min-h-[50vh] flex items-center overflow-hidden py-24">
        <div className="w-full max-w-[2048px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-mono leading-[0.9] tracking-tighter mb-8"
          >
            <span className="bg-black text-white box-decoration-clone leading-[1.2] px-2 py-1">we build the impossible, quietly.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl font-mono text-lg lg:text-xl uppercase"
          >
            <span className="bg-white text-black px-2 py-1 leading-tight box-decoration-clone">
              Quietly crafting the projects others only dream about.
            </span>
          </motion.p>
        </div>
        {/* Simple decorative pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="w-full pt-16 pb-24 px-6 lg:px-12">
        <div className="max-w-[2048px] mx-auto">
          <h2 className="font-bold uppercase text-brand-light font-mono text-base tracking-widest pb-4 relative">Featured Projects</h2>
          
          <div className="relative border-t border-neutral-70">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-6 lg:-mx-12 border-b border-neutral-70">
              <ProjectCard
                name="Soroban-ZK-Std"
                desc="A Zero-Knowledge standard implementation for Stellar, featuring highly optimized WASM execution and audited primitives."
                category="infrastructure"
                href="https://soroban-zk-std.neslabs.io/"
              />
              <ProjectCard
                name="iwallet"
                desc="A secure, modern wallet solution for seamless asset management and on-chain interactions."
                category="infrastructure"
                href="https://iwalet.vercel.app/"
              />
              <div className="hidden lg:block border-l border-neutral-70 p-8 min-h-[300px]">
                 {/* Empty grid space for aesthetic */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-24 px-6 lg:px-12 bg-neutral-90 border-t border-neutral-70">
        <div className="max-w-[2048px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-mono uppercase font-bold tracking-tighter mb-4 text-white">Work with Neslabs</h3>
            <p className="text-lg text-neutral-40 font-mono">
              Pilots, integrations, or collaborations—let’s ship something real.
            </p>
          </div>
          <a
            href="mailto:build@neslabs.io"
            className="inline-block px-8 py-4 font-mono uppercase tracking-widest text-sm bg-white text-black hover:bg-brand-light hover:text-white transition-colors border border-transparent hover:border-white"
          >
            Start Building
          </a>
        </div>
      </section>
    </main>
  );
}
