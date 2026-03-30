import { FiStar, FiShoppingBag } from 'react-icons/fi';

const products = [
  { id: 1, name: 'Flamengo 2025', country: 'Brésil', price: 79.90, rating: 4.8, imageColor: 'bg-red-600' },
  { id: 2, name: 'Boca Juniors Home', country: 'Argentine', price: 74.90, rating: 4.7, imageColor: 'bg-blue-800' },
  { id: 3, name: 'Atlético Nacional', country: 'Colombie', price: 69.90, rating: 4.5, imageColor: 'bg-green-700' },
  { id: 4, name: 'Chivas Guadalajara', country: 'Mexique', price: 72.90, rating: 4.6, imageColor: 'bg-red-500' },
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-amber-500/50 hover:bg-gray-800/50 transition"
        >
          <div className={`${product.imageColor} h-40 rounded-lg mb-4 flex items-center justify-center`}>
            <div className="w-24 h-32 bg-white/20 rounded" />
          </div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-white text-lg">{product.name}</h4>
              <p className="text-sm text-gray-400">{product.country}</p>
            </div>
            <div className="flex items-center gap-1">
              <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-white">{product.rating}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-400 text-sm">Prix</p>
              <p className="text-2xl font-bold text-white">€{product.price.toFixed(2)}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:opacity-90 transition">
              <FiShoppingBag className="h-4 w-4" />
              Acheter
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-xs font-bold bg-black/70 text-amber-400 px-2 py-1 rounded">
              POPULAIRE
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}