

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
    <main className="flex-1">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black">
        <h1 className="text-4xl font-bold tracking-tight">Why Neslabs</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Principles that keep us effective and reliable.</p>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
