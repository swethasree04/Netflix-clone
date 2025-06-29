
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryRow from '../components/CategoryRow';

// Mock data for TV Shows
const popularTVShows = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "96% Match",
    year: "2008-2013",
    genre: "Crime Drama"
  },
  {
    id: 2,
    title: "The Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&h=450&fit=crop",
    rating: "94% Match",
    year: "2005-2013",
    genre: "Comedy"
  },
  {
    id: 3,
    title: "Friends",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    rating: "92% Match",
    year: "1994-2004",
    genre: "Sitcom"
  }
];

const TVShows = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8">TV Shows</h1>
        <CategoryRow title="Popular TV Shows" movies={popularTVShows} />
      </div>
      <Footer />
    </div>
  );
};

export default TVShows;
