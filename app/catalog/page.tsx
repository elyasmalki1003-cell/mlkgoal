import CountryCatalog from '@/components/product/CountryCatalog';

export default function CatalogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Catalogue des maillots</h1>
        <p className="text-gray-400">
          Parcourez notre sélection de maillots officiels et personnalisables des plus grands clubs d’Amérique latine.
        </p>
      </div>
      <CountryCatalog />
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Tous les produits</h2>
        <p className="text-gray-400">Page en construction. Bientôt disponible !</p>
      </div>
    </div>
  );
}