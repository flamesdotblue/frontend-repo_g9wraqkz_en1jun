import { Search, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F7F9FC] dark:bg-slate-900">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0E6FFF]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FF6B6B]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
              Learn a Skill. Teach a Skill.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              SkillSwap connects people who want to learn with those who love to teach. Explore thousands of skills, book sessions, and share your expertise.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#explore" className="inline-flex items-center justify-center rounded-lg bg-[#0E6FFF] px-5 py-3 text-white font-medium shadow hover:opacity-95">
                Explore Skills
                <ChevronRight className="ml-2" size={18} />
              </a>
              <a href="#offer" className="inline-flex items-center justify-center rounded-lg border border-[#0E6FFF]/30 text-[#0E6FFF] px-5 py-3 font-medium hover:bg-[#0E6FFF]/10">
                Offer a Skill
              </a>
            </div>

            <div className="mt-8">
              <label htmlFor="search" className="sr-only">Search skills</label>
              <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                <div className="px-3 text-slate-400">
                  <Search size={18} />
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Try 'Guitar', 'React', 'Yoga'..."
                  className="w-full px-3 py-3 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <button className="mx-2 my-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0E6FFF]/15 via-white to-[#FF6B6B]/20 dark:from-[#0E6FFF]/20 dark:via-slate-900 dark:to-[#FF6B6B]/20 shadow-inner border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm uppercase tracking-widest text-[#0E6FFF] font-semibold">SkillSwap</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Where learners meet mentors</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Book 1:1 sessions, group classes, or swap skills with the community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
