export function WhyPage() {
  const pillars = [
    { title: "Infrastructure-first", body: "We build the boring, essential pieces—so teams can move faster with confidence." },
    { title: "Developer-centric", body: "APIs, SDKs, and docs designed for clarity. No ceremony, just tools that work." },
    { title: "Production-ready", body: "Security, performance, and operability considered from day one." },
    { title: "Composable", body: "Each project stands alone, but the stack works even better together." },
    { title: "Open collaboration", body: "Monochrome branding, transparent roadmaps, and community input." },
    { title: "Sui-native", body: "Optimized for the Sui ecosystem, with interoperability in mind." },
  ];
  
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <section className="relative w-full bg-brand-light text-white py-24">
        <div className="w-full max-w-[2048px] mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-normal font-mono leading-[0.9] tracking-tighter mb-8">
            <span className="bg-black text-white box-decoration-clone leading-[1.2] px-2 py-1">why neslabs</span>
          </h1>
          <p className="max-w-2xl font-mono text-lg lg:text-xl uppercase">
            <span className="bg-white text-black px-2 py-1 leading-tight box-decoration-clone">
              Principles that keep us effective and reliable.
            </span>
          </p>
        </div>
      </section>

      <section className="w-full pt-16 pb-24 px-6 lg:px-12">
        <div className="max-w-[2048px] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <div key={p.title} className="p-8 border-t border-neutral-70 hover:bg-neutral-90 transition-colors">
              <span className="block text-brand-light font-mono text-xs uppercase tracking-widest mb-4">0{idx + 1}</span>
              <h3 className="text-2xl font-mono font-bold text-white mb-4">{p.title}</h3>
              <p className="text-base text-neutral-40">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
