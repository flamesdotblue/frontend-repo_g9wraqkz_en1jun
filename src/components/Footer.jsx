import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#0E6FFF]" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">SkillSwap</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-md">
              A community-driven platform to exchange skills. Learn what you love, teach what you know.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Facebook size={16} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Twitter size={16} /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Linkedin size={16} /></a>
              <a aria-label="Email" href="#" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Mail size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#explore" className="hover:text-slate-900 dark:hover:text-white">Explore</a></li>
              <li><a href="#offer" className="hover:text-slate-900 dark:hover:text-white">Offer a Skill</a></li>
              <li><a href="#how" className="hover:text-slate-900 dark:hover:text-white">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a></li>
              <li><a href="#auth" className="hover:text-slate-900 dark:hover:text-white">Login</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          <p>
            Built with love in <span className="text-[#0E6FFF]">React</span> and <span className="text-[#FF6B6B]">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
