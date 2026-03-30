import { FiFlag } from 'react-icons/fi';
import Link from 'next/link';

const countries = [
  { id: 'br', name: 'Brésil', count: 12, color: 'from-green-600 to-yellow-500' },
  { id: 'ar', name: 'Argentine', count: 8, color: 'from-sky-400 to-blue-600' },
  { id: 'co', name: 'Colombie', count: 6, color: 'from-yellow-400 to-red-600' },
  { id: 'mx', name: 'Mexique', count: 9, color: 'from-green-500 to-red-500' },
  { id: 'uy', name: 'Uruguay', count: 5, color: 'from-blue-400 to-white' },
  { id: 'cl', name: 'Chili', count: 4, color: 'from-red-500 to-blue-500' },
  { id: 'pe', name: 'Pérou', count: 3, color: 'from-red-400 to-white' },
  { id: 'ec', name: 'Équateur', count: 3, color: 'from-yellow-500 to-blue-600' },
];

export default function CountryCatalog() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {countries.map((country) => (
        <Link
          key={country.id}
          href={`/catalog/${country.id}`}
          className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-amber-500/50 hover:bg-gray-800/50 transition-all duration-300"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-10 group-hover:opacity-20 transition`} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FiFlag className="h-8 w-8 text-gray-400" />
              <span className="text-sm font-semibold text-gray-400">{country.count} modèles</span>
            </div>
            <h3 className="text-xl font-bold text-white">{country.name}</h3>
            <p className="text-sm text-gray-400 mt-2">Voir les maillots</p>
          </div>
        </Link>
      ))}
    </div>
  );
}