
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Plus, ThumbsUp, Share } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// This would normally come from an API or database
const getMovieById = (id: string) => {
  // Mock movie data - in a real app this would be fetched from an API
  const movies = {
    '1': {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
      rating: "97% Match",
      year: "2023",
      genre: "Sci-Fi Drama",
      duration: "8 Episodes",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
      director: "The Duffer Brothers"
    },
    '2': {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=800&h=450&fit=crop",
      rating: "92% Match",
      year: "2023",
      genre: "Historical Drama",
      duration: "10 Episodes",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
      director: "Peter Morgan"
    }
  };
  
  return movies[id as keyof typeof movies] || movies['1'];
};

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(id || '1');

  const handlePlay = () => {
    console.log(`Playing ${movie.title}`);
    alert(`Playing ${movie.title}...`);
  };

  const handleAddToList = () => {
    console.log(`Adding ${movie.title} to My List`);
    alert(`Added ${movie.title} to My List!`);
  };

  const handleLike = () => {
    console.log(`Liked ${movie.title}`);
    alert(`Liked ${movie.title}!`);
  };

  const handleShare = () => {
    console.log(`Sharing ${movie.title}`);
    alert(`Sharing ${movie.title}!`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="relative h-96 overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="px-4 md:px-16 max-w-2xl">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-green-400 font-semibold">{movie.rating}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="px-2 py-1 border border-gray-400 text-sm">{movie.genre}</span>
            </div>

            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              {movie.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlay}
                className="flex items-center bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Play
              </button>
              
              <button
                onClick={handleAddToList}
                className="flex items-center bg-gray-600/80 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                My List
              </button>
              
              <button
                onClick={handleLike}
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
              >
                <ThumbsUp className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleShare}
                className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
              >
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="px-4 md:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About {movie.title}</h2>
            <p className="text-gray-300 mb-6">{movie.description}</p>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Cast</h3>
              <p className="text-gray-300">{movie.cast.join(', ')}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Director</h3>
              <p className="text-gray-300">{movie.director}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Genre</h3>
              <p className="text-gray-300">{movie.genre}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetails;
