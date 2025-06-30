
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results - in a real app, this would fetch from an API
  const mockMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1489599797906-352d2d62f95c?w=300&h=450&fit=crop",
      rating: "97% Match",
      year: "2022",
      genre: "Sci-Fi Drama"
    },
    {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
      rating: "95% Match",
      year: "2023",
      genre: "Historical Drama"
    },
    {
      id: 3,
      title: "Wednesday",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
      rating: "92% Match",
      year: "2022",
      genre: "Comedy Horror"
    }
  ];

  // Filter movies based on search query
  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20 px-4 md:px-16">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-400">
            {filteredMovies.length} {filteredMovies.length === 1 ? 'result' : 'results'} found
          </p>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-4">No results found</h2>
            <p className="text-gray-400">
              Try searching for something else or check your spelling.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
