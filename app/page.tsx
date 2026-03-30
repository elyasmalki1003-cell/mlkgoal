import HeroSection from '@/components/ui/HeroSection';
import CountryCatalog from '@/components/product/CountryCatalog';
import CustomizationDemo from '@/components/product/CustomizationDemo';
import FeaturedProductsEnhanced from '@/components/product/FeaturedProductsEnhanced';

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Pays populaires</h2>
        <CountryCatalog />
      </section>
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Personnalisez votre maillot</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Créez le maillot unique de vos rêves en choisissant parmi nos options de personnalisation.
          </p>
        </div>
        <CustomizationDemo />
      </section>
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Maillots en vedette</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de maillots officiels des plus grands clubs d'Amérique latine.
            Tous personnalisables avec votre nom et numéro préférés.
          </p>
        </div>
        <FeaturedProductsEnhanced />
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir MLKgoal</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              La référence pour les maillots de football latino-américains personnalisés
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-gray-300">Satisfaction garantie</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24h</div>
              <div className="text-gray-300">Livraison express</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-300">Clubs disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-gray-300">Pays représentés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
          <h2 className="text-4xl font-bold mb-6">Prêt à soutenir votre équipe ?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Créez votre maillot personnalisé maintenant et recevez-le en 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog" 
              className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90 transition hover:scale-105"
            >
              Explorer le catalogue
            </a>
            <a 
              href="/customize" 
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 transition"
            >
              Personnaliser un maillot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}