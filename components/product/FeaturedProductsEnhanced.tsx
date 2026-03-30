'use client';

import { FiStar, FiShoppingBag } from 'react-icons/fi';
import ProductImage from './ProductImage';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const products = [
  { 
    id: 1, 
    name: 'Flamengo 2025', 
    country: 'Brésil', 
    price: 79.90, 
    rating: 4.8, 
    colorClass: 'bg-gradient-to-br from-red-600 to-black',
    slug: 'flamengo-2025',
    description: 'Maillot officiel Flamengo édition 2025, tissu technique Dry-Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    tags: ['Nouvelle collection', 'Édition limitée']
  },
  { 
    id: 2, 
    name: 'Boca Juniors Home', 
    country: 'Argentine', 
    price: 74.90, 
    rating: 4.7, 
    colorClass: 'bg-gradient-to-br from-blue-800 to-sky-400',
    slug: 'boca-juniors-home',
    description: 'Maillot domicile Boca Juniors, coupe moderne, confort premium',
    sizes: ['M', 'L', 'XL'],
    inStock: true,
    tags: ['Classique', 'Célébre']
  },
  { 
    id: 3, 
    name: 'Atlético Nacional', 
    country: 'Colombie', 
    price: 69.90, 
    rating: 4.5, 
    colorClass: 'bg-gradient-to-br from-green-700 to-green-400',
    slug: 'atletico-nacional',
    description: 'Maillot Atlético Nacional, design vert et blanc traditionnel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    tags: ['Green edition', 'Sustainable']
  },
  { 
    id: 4, 
    name: 'Chivas Guadalajara', 
    country: 'Mexique', 
    price: 72.90, 
    rating: 4.6, 
    colorClass: 'bg-gradient-to-br from-red-500 to-white',
    slug: 'chivas-guadalajara',
    description: 'Maillot Chivas Guadalajara, rouge et blanc, coupe athlétique',
    sizes: ['M', 'L', 'XL'],
    inStock: true,
    tags: ['Mexican pride', 'Heritage']
  },
];

export default function FeaturedProductsEnhanced() {
  const { addItem } = useCart();

  const addToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      country: product.country,
      size: 'M', // Default size
      color: product.colorClass.split(' ')[0]?.replace('bg-gradient-to-br', '') || 'red'
    });
    alert(`${product.name} ajouté au panier!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-amber-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02]">
            {/* Image optimisée */}
            <ProductImage 
              country={product.country} 
              colorClass={product.colorClass}
            />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contenu produit */}
            <div className="mt-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-400">{product.country}</p>
                </div>
                <div className="3flex items-center gap-1">
                  <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-white">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-sm">Prix</p>
                  <p className="text-2xl font-bold text-white">€{product.price.toFixed(2)}</p>
                </div>
                <button 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold hover:opacity-90 transition hover:shadow-lg hover:shadow-amber-500/25"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  <FiShoppingBag className="h-4 w-4" />
                  Acheter
                </button>
              </div>
              
              {/* Tailles disponibles */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Tailles:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span 
                      key={size}
                      className="px-3 py-1 text-xs border border-gray-700 rounded-lg text-gray-300 hover:border-amber-500 hover:text-amber-400 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Badges */}
            {product.inStock && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                  EN STOCK
                </span>
              </div>
            )}
            
            {/* Popular badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30">
                POPULAIRE
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}