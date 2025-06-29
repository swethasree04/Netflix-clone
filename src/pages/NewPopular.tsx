
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryRow from '../components/CategoryRow';

// Mock data for New & Popular
const newReleases = [
  {
    id: 1,
    title: "Wednesday",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    rating: "89% Match",
    year: "2023",
    genre: "Dark Comedy"
  },
  {
    id: 2,
    title: "Glass Onion",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    rating: "85% Match",
    year: "2023",
    genre: "Mystery"
  }
];

const NewPopular = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-8">New & Popular</h1>
        <CategoryRow title="New Releases" movies={newReleases} />
      </div>
      <Footer />
    </div>
  );
};

export default NewPopular;
