import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import { MOCK_POSTS } from './constants';

const App = () => {
  return (
    <div className="min-h-screen bg-retro-900 text-white flex flex-col font-sans">
      <Header />
      
      <main id="portfolio" className="flex-grow pt-10 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-retro-100 to-purple-500">
                Catálogo Retro
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Explora nuestra colección seleccionada de las mejores series de los 80s y 90s. 
                Envíanos un mensaje directo para consultar precios y disponibilidad.
            </p>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.map((post) => (
              <PortfolioItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto px-4 mt-24">
            <div className="bg-gradient-to-r from-retro-800 to-retro-700 rounded-3xl p-8 md:p-12 text-center border border-retro-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Buscas una serie específica?</h3>
                <p className="text-gray-300 mb-8">
                    Si no encuentras lo que buscas en el catálogo, escríbenos. Tenemos cientos de títulos en stock.
                </p>
                <a 
                   href={`https://wa.me/543512417464?text=${encodeURIComponent("Hola, estoy buscando una serie específica...")}`}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-block bg-white text-retro-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors transform hover:scale-105"
                >
                    Contactar Soporte
                </a>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;