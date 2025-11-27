import React from 'react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 text-center px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <span className="text-brand-red font-display uppercase tracking-widest text-sm font-semibold mb-2 block">Benvenuti</span>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-brand-dark mb-6">
          Echte italienische Tradition
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 leading-relaxed text-lg font-light">
          Willkommen bei <strong className="font-medium text-brand-dark">Pizzeria da Massimo</strong> in Altomünster. 
          Wir servieren Ihnen mit Leidenschaft zubereitete italienische Spezialitäten. 
          Von knuspriger Steinofenpizza über frische Pasta bis hin zu knackigen Salaten – 
          bei uns schmecken Sie die Liebe zum Detail.
        </p>
      </div>
    </section>
  );
};