import { Calendar, Star, MessageCircle } from 'lucide-react';

const categories = [
  { name: 'Programming', color: 'from-blue-500/20 to-blue-500/5' },
  { name: 'Music', color: 'from-pink-500/20 to-pink-500/5' },
  { name: 'Fitness', color: 'from-green-500/20 to-green-500/5' },
  { name: 'Cooking', color: 'from-orange-500/20 to-orange-500/5' },
  { name: 'Design', color: 'from-purple-500/20 to-purple-500/5' },
  { name: 'Language', color: 'from-teal-500/20 to-teal-500/5' },
];

const testimonials = [
  {
    name: 'Ava W.',
    quote: 'I booked a React session and launched my first project in a week. The mentor was incredible! ',
    rating: 5,
  },
  {
    name: 'Liam T.',
    quote: 'Swapped guitar lessons for Spanish conversation—such a fun way to learn.',
    rating: 5,
  },
  {
    name: 'Noah K.',
    quote: 'The booking flow and messaging made it super easy to get started.',
    rating: 4,
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0E6FFF]">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

export default function HomeContent() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      {/* Categories */}
      <section id="explore">
        <SectionTitle
          eyebrow="Categories"
          title="Discover popular skill areas"
          subtitle="Browse by category to find the perfect mentor or student."
        />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#explore"
              className={`group rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b ${c.color} p-4 text-center hover:shadow-md transition-shadow`}
            >
              <div className="h-10 w-10 mx-auto rounded-lg bg-white dark:bg-slate-900 shadow flex items-center justify-center text-[#0E6FFF] font-bold">
                {c.name[0]}
              </div>
              <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white group-hover:text-[#0E6FFF]">{c.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how">
        <SectionTitle
          eyebrow="How it Works"
          title="Simple steps to start learning and teaching"
          subtitle="Search, schedule, and connect—done."
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
            <div className="h-10 w-10 rounded-lg bg-[#0E6FFF]/10 text-[#0E6FFF] flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Find your match</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Search skilled mentors or eager learners by category, price, and rating.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
            <div className="h-10 w-10 rounded-lg bg-[#0E6FFF]/10 text-[#0E6FFF] flex items-center justify-center">
              <Calendar size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Book a session</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Pick a time that works. Online or in-person—your choice.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
            <div className="h-10 w-10 rounded-lg bg-[#0E6FFF]/10 text-[#0E6FFF] flex items-center justify-center">
              <Star size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Learn and review</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Enjoy the session and leave a review to help others decide.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <SectionTitle
          eyebrow="Loved by learners"
          title="Real stories from the community"
          subtitle="Thousands of bookings, tons of new skills."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700 dark:text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900 dark:text-white">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
