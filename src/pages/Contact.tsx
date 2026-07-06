import { Button } from "@/components/ui/button";

export function ContactPage() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <section className="relative w-full bg-brand-light text-white py-24">
        <div className="w-full max-w-[2048px] mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-normal font-mono leading-[0.9] tracking-tighter mb-8">
            <span className="bg-black text-white box-decoration-clone leading-[1.2] px-2 py-1">contact us</span>
          </h1>
          <p className="max-w-2xl font-mono text-lg lg:text-xl uppercase">
            <span className="bg-white text-black px-2 py-1 leading-tight box-decoration-clone">
              Tell us about your use-case. We reply within 48 hours.
            </span>
          </p>
        </div>
      </section>

      <section className="w-full pt-16 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6 font-mono">
            <div>
              <label className="text-sm uppercase tracking-widest text-neutral-40 block mb-2">Name</label>
              <input
                className="w-full rounded-none border-b border-neutral-70 bg-transparent py-4 text-white placeholder-neutral-70 focus:outline-none focus:border-brand-light transition-colors"
                placeholder="YOUR NAME"
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-widest text-neutral-40 block mb-2">Email</label>
              <input
                type="email"
                className="w-full rounded-none border-b border-neutral-70 bg-transparent py-4 text-white placeholder-neutral-70 focus:outline-none focus:border-brand-light transition-colors"
                placeholder="YOU@COMPANY.COM"
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-widest text-neutral-40 block mb-2">What do you want to build?</label>
              <textarea
                rows={4}
                className="w-full rounded-none border-b border-neutral-70 bg-transparent py-4 text-white placeholder-neutral-70 focus:outline-none focus:border-brand-light transition-colors resize-none"
                placeholder="BRIEFLY DESCRIBE YOUR PROJECT"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
              <p className="text-xs text-neutral-40 uppercase tracking-widest">
                Or email us directly: <br />
                <a className="text-brand-light hover:underline" href="mailto:hello@neslabs.io">hello@neslabs.io</a>
              </p>
              <Button className="px-8 py-6 rounded-none text-sm uppercase tracking-widest bg-white text-black hover:bg-brand-light transition-colors border-none">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
