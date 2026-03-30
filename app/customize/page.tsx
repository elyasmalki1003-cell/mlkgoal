import CustomizationDemo from '@/components/product/CustomizationDemo';

export default function CustomizePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Personnalisez votre maillot</h1>
        <p className="text-gray-400">
          Choisissez chaque détail pour créer un maillot unique à votre image.
        </p>
      </div>
      <CustomizationDemo />
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Comment ça marche ?</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Sélectionnez un modèle de base (pays, club)</li>
          <li>Personnalisez les couleurs, le nom, le numéro</li>
          <li>Ajoutez des options supplémentaires (badges, matériaux)</li>
          <li>Validez votre création et passez à la caisse</li>
          <li>Recevez votre maillot unique sous 7 à 10 jours</li>
        </ol>
      </div>
    </div>
  );
}