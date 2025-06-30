
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Playing ${movie.title}`);
    alert(`Playing ${movie.title}...`);
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Adding ${movie.title} to My List`);
    alert(`Added ${movie.title} to My List!`);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Liked ${movie.title}`);
    alert(`Liked ${movie.title}!`);
  };

  const handleMoreInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/movie/${movie.id}`);
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className="relative flex-shrink-0 w-40 md:w-60 transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-24 md:h-36 object-cover transition-all duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop";
          }}
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
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-md" />
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handlePlay}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Play className="w-4 h-4 text-black fill-current ml-0.5" />
                </button>
                <button 
                  onClick={handleAddToList}
                  className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
                <button 
                  onClick={handleLike}
                  className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
                >
                  <ThumbsUp className="w-4 h-4 text-white" />
                </button>
              </div>
              <button 
                onClick={handleMoreInfo}
                className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
              >
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
