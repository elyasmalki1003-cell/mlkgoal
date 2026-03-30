import { notFound } from 'next/navigation';
import { FiFlag, FiFilter, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

// Données mock pour chaque pays
const countryProducts = {
  br: {
    name: 'Brésil',
    flagColor: 'from-green-600 to-yellow-500',
    products: [
      { id: 1, name: 'Flamengo 2025', price: 79.90, rating: 4.8, description: 'Maillot officiel Flamengo' },
      { id: 2, name: 'São Paulo FC', price: 75.90, rating: 4.6, description: 'Maillot São Paulo FC' },
      { id: 3, name: 'Santos FC', price: 72.90, rating: 4.5, description: 'Maillot Santos FC' },
      { id: 4, name: 'Palmeiras', price: 78.90, rating: 4.7, description: 'Maillot Palmeiras' },
      { id: 5, name: 'Corinthians', price: 76.90, rating: 4.6, description: 'Maillot Corinthians' },
      { id: 6, name: 'Botafogo', price: 71.90, rating: 4.4, description: 'Maillot Botafogo' },
    ]
  },
  ar: {
    name: 'Argentine',
    flagColor: 'from-sky-400 to-blue-600',
    products: [
      { id: 7, name: 'Boca Juniors Home', price: 74.90, rating1: 4.7, description: 'Maillot domicile Boca Juniors' },
      { id: 8, name: 'River Plate', price: 76.90, rating: 4.8, description: 'Maillot River Plate' },
      { id: 9, name: 'San Lorenzo', price: 73.90, rating: 4.5, description: 'Maillot San Lorenzo' },
      { id: 10, name: 'Independiente', price: 72.90, rating: 4.4, description: 'Maillot Independiente' },
    ]
  },
  co: {
    name: 'Colombie',
    flagColor: 'from-yellow-400 to-red-600',
    products: [
      { id: 11, name: 'Atlético Nacional', price: 69.90, rating: 4.5, description: 'Maillot Atlético Nacional' },
      { id: 12, name: 'Millonarios', price: 68.90, rating: 4.4, description: 'Maillot Millonarios' },
      { id: 13, name: 'Deportivo Cali', price: 67.90, rating: 4.3, description: 'Maillot Deportivo Cali' },
    ]
  },
  mx: {
    name: 'Mexique',
    flagColor: 'from-green-500 to-red-500',
    products: [
      { id: 14, name: 'Chivas Guadalajara', price: 72.90, rating: 4.6, description: 'Maillot Chivas Guadalajara' },
      { id: 15, name: 'Club América', price: 75.90, rating: 4.7, description: 'Maillot Club América' },
      { id: 16, name: 'Monterrey', price: 73.90, rating: 4.5, description: 'Maillot Monterrey' },
      { id: 17, name: 'Tigres UANL', price: 74.90, rating: 4.6, description: 'Maillot Tigres UANL' },
    ]
  },
};

export default function CountryCatalogPage({ params }: { params: { countryId: string } }) {
  const countryId = params.countryId;
  const countryData = countryProducts[countryId];
  
  if (!countryData) {
    notFound();
  }

  const products = countryData.products;
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link href="/catalog" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition mb-4">
            <FiArrowLeft className="h-4 w-4" />
            Retour au catalogue
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Maillots {countryData.name}</h1>
          <p className="text-gray-400">
            {products.length} maillots officiels disponibles pour {countryData.name}
          </p>
        </div>
        <div className={`bg-gradient-to-br ${countryData.flagColor} h-16 w-16 rounded-lg flex items-center justify-center`}>
          <FiFlag className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Filtres */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <div className="flex items-center gap-4 mb-6">
          <FiFilter className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-bold text-white">Filtres</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-400 mb-2">Prix</label>
            <div className="flex gap-2">
              <select className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Tous les prix</option>
                <option>&lt; €70</option>
                <option>€70 - €80</option>
                <option>&gt; €80</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-400 mb-2">Club</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Tous les clubs</option>
              {products.map((product) => (
                <option key={product.id}>{product.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-400 mb-2">Popularité</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Tous</option>
              <option>4.5+ stars</option>
              <option>4.0+ stars</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-amber-500/50 hover:bg-gray-800/50 transition"
          >
            <div className={`bg-gradient-to-br ${countryData.flagColor} h-48 rounded-lg mb-4 flex items-center justify-center`}>
              <div className="w-32 h-40 bg-white/10 rounded" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-white text-lg">{product.name}</h4>
                <p className="text-sm text-gray-400">{product.description}</p>
              </div>
              <div className="text-sm font-semibold text-white">
                {product.rating} ★
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-gray-400 text-sm">Prix</p>
                <p className="text-2xl font-bold text-white">€{product.price.toFixed(2)}</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:opacity-90 transition">
                Voir détails
              </button>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-xs font-bold bg-black/70 text-amber-400 px-2 py-1 rounded">
                {countryData.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Statistiques */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">{products.length}</div>
            <div className="text-sm text-gray-400">Maillots disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">€{Math.min(...products.map(p => p.price)).toFixed(2)}</div>
            <div className="text-sm text-gray-400">Prix minimum</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">€{Math.max(...products.map(p => p.price)).toFixed(2)}</div>
            <div className="text-sm text-gray-400">Prix maximum</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">{products.reduce((acc, p) => acc + p.rating, 0) / products.length}</div>
            <div className="text-sm text-gray-400">Note moyenne</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Personnalisation disponible</h3>
            <p className="text-gray-400">
              Tous les maillots de {countryData.name} peuvent être personnalisés avec votre nom et numéro
            </p>
          </div>
          <Link href="/customize" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:opacity-90 transition">
            Personnaliser un maillot
          </Link>
        </div>
      </div>
    </div>
  );
}