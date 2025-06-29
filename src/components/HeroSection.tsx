
import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroSection = () => {
  const handlePlay = () => {
    console.log('Play button clicked');
    alert('Playing Stranger Things...');
  };

  const handleMoreInfo = () => {
    console.log('More Info button clicked');
    alert('More information about Stranger Things would be displayed here.');
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Stranger Things
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in opacity-90">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
          terrifying supernatural forces and one strange little girl.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <button 
            onClick={handlePlay}
            className="flex items-center justify-center px-8 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2 fill-current" />
            Play
          </button>
          <button 
            onClick={handleMoreInfo}
            className="flex items-center justify-center px-8 py-3 bg-gray-600/70 text-white rounded font-semibold hover:bg-gray-600/90 transition-all duration-200 hover:scale-105"
          >
            <Info className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>

        <div className="mt-8 flex items-center space-x-4 text-sm opacity-90">
          <span className="bg-red-600 px-2 py-1 rounded text-xs font-semibold">TV-14</span>
          <span>2023</span>
          <span>4 Seasons</span>
          <span className="border border-gray-400 px-2 py-1 rounded text-xs">HD</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
