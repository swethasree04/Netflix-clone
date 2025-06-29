
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
  genre: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex-shrink-0 w-40 md:w-60 transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-24 md:h-36 object-cover transition-all duration-300 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        )}
      </div>

      {/* Expanded Card on Hover */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-72 bg-zinc-900 rounded-md shadow-2xl z-30 transform scale-125 origin-center transition-all duration-300">
          {/* Image */}
          <div className="relative">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-md" />
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Play className="w-4 h-4 text-black fill-current ml-0.5" />
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <Plus className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <ThumbsUp className="w-4 h-4 text-white" />
                </button>
              </div>
              <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Movie Info */}
            <h3 className="text-white font-semibold text-sm mb-2 line-clamp-1">
              {movie.title}
            </h3>
            
            <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
              <span className="text-green-400 font-semibold">{movie.rating}</span>
              <span>{movie.year}</span>
            </div>
            
            <p className="text-gray-400 text-xs">
              {movie.genre}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
