import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-slate-950">
      <Navbar />
      <Hero />
      <HomeContent />
      <section id="offer" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Share your expertise on SkillSwap</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Create a listing in minutes. Set your price, availability, and start teaching.</p>
          </div>
          <a href="#offer-form" className="inline-flex items-center justify-center rounded-lg bg-[#0E6FFF] px-5 py-3 text-white font-medium shadow hover:opacity-95">Create a Listing</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
