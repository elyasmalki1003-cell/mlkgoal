import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

interface ProductImageProps {
  country: string;
  colorClass: string;
}

export default function ProductImage({ country, colorClass }: ProductImageProps) {
  // Map des pays aux images de drapeaux (placeholders pour démo)
  const countryFlags: Record<string, string> = {
    'Brésil': '/flags/brazil.svg',
    'Argentine': '/flags/argentina.svg',
    'Colombie': '/flags/colombia.svg',
    'Mexique': '/flags/mexico.svg',
    'Uruguay': '/flags/uruguay.svg',
    'Chili': '/flags/chile.svg',
    'Pérou': '/flags/peru.svg',
  };

  const flagSrc = countryFlags[country] || '/flags/default.svg';

  return (
    <div className="relative">
      {/* Placeholder de maillot avec couleur */}
      <div className={`${colorClass} h-64 w-full rounded-xl flex items-center justify-center relative overflow-hidden`}>
        {/* Design du maillot */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
        
        {/* Détails du maillot */}
        <div className="absolute top-4 left-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white font-bold">10</span>
          </div>
        </div>
        
        {/* Nombre et bandes */}
        <div className="absolute bottom-8 left-4 w-3/4 h-8 bg-white/10 rounded-lg"></div>
        <div className="absolute top-12 w-3/4 h-3 bg-white/10 rounded-lg"></div>
        <div className="absolute top-20 w-3/4 h-3 bg-white/10 rounded-lg"></div>
      </div>
      
      {/* Badge de popularité */}
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold rounded-full">
          POPULAIRE
        </span>
      </div>
    </div>
  );
}