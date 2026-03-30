'use client';

import { useState } from 'react';
import { FaPalette, FaFont, FaArrowsAlt, FaCheck } from 'react-icons/fa';

const customizationOptions = [
  { id: 'color', label: 'Couleur', icon: FaPalette, values: ['Rouge', 'Bleu', 'Noir', 'Blanc', 'Vert'] },
  { id: 'size', label: 'Taille', icon: FaArrowsAlt, values: ['S', 'M', 'L', 'XL', 'XXL'] },
  { id: 'name', label: 'Nom personnalisé', icon: FaFont, values: ['Votre nom', 'Numéro', 'Texte'] },
];

export default function CustomizationDemo() {
  const [selectedOptions, setSelectedOptions] = useState({
    color: 'Rouge',
    size: 'M',
    name: 'Votre nom',
  });

  const handleOptionSelect = (optionId: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Configurez votre maillot</h3>
          <div className="space-y-6">
            {customizationOptions.map((option) => (
              <div key={option.id} className="space-y-3">
                <div className="flex items-center gap-2">
                  <option.icon className="h-5 w-5 text-amber-400" />
                  <h4 className="font-semibold text-white">{option.label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleOptionSelect(option.id, value)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${selectedOptions[option.id as keyof typeof selectedOptions] === value
                          ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                          : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600'
                        }`}
                    >
                      {value}
                      {selectedOptions[option.id as keyof typeof selectedOptions] === value && (
                        <FaCheck className="inline ml-2 h-3 w-3" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-lg bg-gray-800 border border-gray-700">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400">Total</p>
                <p className="text-2xl font-bold text-white">€89.90</p>
              </div>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 font-semibold text-black hover:opacity-90 transition">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-64 h-80 bg-gradient-to-b from-gray-800 to-black rounded-2xl border border-gray-700 p-8 flex items-center justify-center">
            {/* Mock jersey */}
            <div className="absolute w-48 h-64 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)' }} />
            <div className="absolute w-40 h-12 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className="text-black font-bold text-lg">10</span>
            </div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white font-bold">
              {selectedOptions.name}
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-6 text-center">
            Prévisualisation en temps réel. Votre maillot sera fabriqué sur mesure.
          </p>
        </div>
      </div>
    </div>
  );
}