import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MLKgoal</h3>
            <p className="text-gray-400 text-sm">
              Maillots de football latino-américains personnalisés. Qualité premium, designs uniques.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Catalogue</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">Brésil</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Argentine</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Colombie</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Mexique</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Uruguay</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Livraison</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Retours</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Paiement sécurisé</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              © 2025 MLKgoal. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}