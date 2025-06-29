
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryRow from '../components/CategoryRow';

// Mock data for Movies
const popularMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    rating: "94% Match",
    year: "2008",
    genre: "Action"
  },
  {
    id: 2,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=300&h=450&fit=crop",
    rating: "91% Match",
    year: "2010",
    genre: "Sci-Fi"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    rating: "89% Match",
    year: "1994",
    genre: "Crime"
  }
];

const Movies = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8">Movies</h1>
        <CategoryRow title="Popular Movies" movies={popularMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
