export function ProjectsPage() {
  const projects = [
    { 
      name: "Soroban-ZK-Std", 
      domain: "https://soroban-zk-std.neslabs.io/",
      points: [
        "The Zero-Knowledge standard implementation for Stellar",
        "Highly optimized execution within the WASM runtime",
        "Memory safe with audited cryptographic primitives",
        "Groth16 proof verification"
      ],
      category: "infrastructure"
    },
    { 
      name: "iwallet", 
      domain: "https://iwalet.vercel.app/",
      points: ["Asset management", "Secure transactions", "Seamless on-chain interactions"],
      category: "infrastructure"
    },
  ];

  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <section className="relative w-full bg-brand-light text-white py-24">
        <div className="w-full max-w-[2048px] mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-normal font-mono leading-[0.9] tracking-tighter mb-8">
            <span className="bg-black text-white box-decoration-clone leading-[1.2] px-2 py-1">projects</span>
          </h1>
          <p className="max-w-2xl font-mono text-lg lg:text-xl uppercase">
            <span className="bg-white text-black px-2 py-1 leading-tight box-decoration-clone">
              An integrated on-chain stack for builders and enterprises.
            </span>
          </p>
        </div>
      </section>

      <section className="w-full pt-16 pb-24 px-6 lg:px-12">
        <div className="max-w-[2048px] mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.name} className="group relative flex flex-col p-8 border border-neutral-70 hover:bg-brand-light transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-mono font-bold text-white transition-colors">
                      {p.domain ? (
                        <a href={p.domain} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0">
                          {p.name}
                        </a>
                      ) : (
                        p.name
                      )}
                    </h3>
                    {p.domain && (
                      <a 
                        href={p.domain} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="relative z-10 text-sm font-mono text-brand-light group-hover:text-neutral-80 hover:underline mt-2 inline-block"
                      >
                        {p.domain.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-neutral-40 group-hover:text-white border border-neutral-70 group-hover:border-white rounded-full px-3 py-1 transition-colors">
                    {p.category}
                  </span>
                </div>
                <ul className="mt-4 list-disc pl-5 text-sm font-mono text-neutral-40 group-hover:text-white space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
