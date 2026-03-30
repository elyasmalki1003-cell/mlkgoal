import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import Link from 'next/link';

export default function CartPage() {
  const items = [
    { id: 1, name: 'Flamengo 2025', size: 'M', color: 'Rouge', price: 79.90, quantity: 1 },
    { id: 2, name: 'Boca Juniors Home', size: 'L', color: 'Bleu', price: 74.90, quantity: 2 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.90;
  const total = subtotal + shipping;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Votre panier</h1>
        <p className="text-gray-400">
          {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col md:flex-row gap-6"
            >
              <div className="w-32 h-32 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <button className="text-gray-500 hover:text-red-400">
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-400">Taille: {item.size} | Couleur: {item.color}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 rounded border border-gray-700 hover:bg-gray-800">
                        <FiMinus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button className="p-1 rounded border border-gray-700 hover:bg-gray-800">
                        <FiPlus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">€{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Récapitulatif</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Sous-total</span>
                <span className="text-white">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Livraison</span>
                <span className="text-white">€{shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-800 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 font-semibold text-black hover:opacity-90 transition">
              Passer la commande
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              Paiement 100% sécurisé via Stripe
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h4 className="font-semibold text-white mb-3">Code promo</h4>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Entrez un code"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-4 py-2 rounded-lg border border-amber-500 text-amber-500 font-semibold hover:bg-amber-500/10 transition">
                Appliquer
              </button>
            </div>
          </div>
          <Link
            href="/catalog"
            className="block text-center text-amber-400 hover:text-amber-300 transition"
          >
            ← Continuer vos achats
          </Link>
        </div>
      </div>
    </div>
  );
}