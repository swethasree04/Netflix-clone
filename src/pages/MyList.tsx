
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryRow from '../components/CategoryRow';

// Mock data for My List
const myListMovies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    rating: "97% Match",
    year: "2023",
    genre: "Sci-Fi Drama"
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop",
    rating: "88% Match",
    year: "2023",
    genre: "Fantasy Adventure"
  }
];

const MyList = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8">My List</h1>
        <CategoryRow title="Your Saved Movies & Shows" movies={myListMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
