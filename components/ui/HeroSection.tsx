import { FiArrowRight, FiShield } from 'react-icons/fi';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 md:p-12">
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <FiShield className="h-6 w-6 text-amber-400" />
          <span className="text-sm font-semibold text-amber-400">Édition limitée 2025</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Maillots de football <span className="text-amber-400">latino‑américains</span> personnalisés
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Supportez votre équipe avec un maillot unique. Choisissez parmi les plus grands clubs d’Amérique latine et personnalisez chaque détail.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-lg font-semibold text-black hover:opacity-90 transition"
          >
            Explorer le catalogue
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/customize"
            className="inline-flex items-center justify-center rounded-lg border border-amber-500 px-8 py-3 text-lg font-semibold text-amber-500 hover:bg-amber-500/10 transition"
          >
            Créer le vôtre
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-gray-400">Pays</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-400">Clubs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24h</div>
            <div className="text-gray-400">Livraison express</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-900/20 to-transparent" />
      <div className="absolute -right-20 top-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
    </div>
  );
}