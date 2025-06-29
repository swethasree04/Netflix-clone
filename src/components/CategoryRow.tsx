
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
  genre: string;
}

interface CategoryRowProps {
  title: string;
  movies: Movie[];
}

const CategoryRow: React.FC<CategoryRowProps> = ({ title, movies }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 md:px-16 mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">{title}</h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Movies Row */}
        <div
          ref={scrollRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
