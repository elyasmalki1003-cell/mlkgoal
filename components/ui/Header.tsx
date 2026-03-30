import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">MLKgoal</span>
            <span className="rounded bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-1 text-xs font-semibold text-black">
              LATINO
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Accueil
            </Link>
            <Link href="/catalog" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Catalogue
            </Link>
            <Link href="/customize" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Personnaliser
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition">
              À propos
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              placeholder="Rechercher un maillot..."
              className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-800 transition">
            <FiUser className="h-5 w-5" />
          </button>
          <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
            <FiShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}