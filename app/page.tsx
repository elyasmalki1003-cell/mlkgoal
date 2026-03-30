import HeroSection from '@/components/ui/HeroSection';
import CountryCatalog from '@/components/product/CountryCatalog';
import CustomizationDemo from '@/components/product/CustomizationDemo';
import FeaturedProducts from '@/components/product/FeaturedProducts';

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Pays populaires</h2>
        <CountryCatalog />
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Personnalisez votre maillot</h2>
        <CustomizationDemo />
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Maillots en vedette</h2>
        <FeaturedProducts />
      </section>
    </div>
  );
}