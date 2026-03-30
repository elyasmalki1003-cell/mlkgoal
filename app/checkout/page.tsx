'use client';

import { useState } from 'react';
import { FiLock, FiCreditCard, FiTruck } from 'react-icons/fi';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Finaliser votre commande</h1>
        <p className="text-gray-400">
          Remplissez vos informations pour finaliser l’achat.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Informations de livraison</h3>
              <span className="text-sm text-amber-400">Étape {step}/3</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Prénom"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Nom"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Adresse"
                className="col-span-2 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Ville"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Code postal"
                className="px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiCreditCard className="h-5 w-5" />
              Paiement
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Numéro de carte"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-32 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-24 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FiLock className="h-4 w-4" />
                <span>Paiement sécurisé avec chiffrement SSL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Récapitulatif</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Sous-total</span>
                <span className="text-white">€168.70</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Livraison</span>
                <span className="text-white">€9.90</span>
              </div>
              <div className="border-t border-gray-800 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>€178.60</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 font-semibold text-black hover:opacity-90 transition">
              Payer maintenant
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              Vous allez être redirigé vers notre passerelle de paiement.
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <FiTruck className="h-5 w-5" />
              Livraison express
            </h4>
            <p className="text-sm text-gray-400">
              Livraison gratuite à partir de €100. Expédition sous 24h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}