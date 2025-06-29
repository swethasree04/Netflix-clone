
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryRow from '../components/CategoryRow';
import Footer from '../components/Footer';

// Mock data for different categories with working movie images
const trendingNow = [
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
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=300&h=450&fit=crop",
    rating: "92% Match",
    year: "2023",
    genre: "Historical Drama"
  },
  {
    id: 3,
    title: "Wednesday",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    rating: "89% Match",
    year: "2023",
    genre: "Dark Comedy"
  },
  {
    id: 4,
    title: "Money Heist",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    rating: "95% Match",
    year: "2023",
    genre: "Crime Thriller"
  },
  {
    id: 5,
    title: "Ozark",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "93% Match",
    year: "2022",
    genre: "Crime Drama"
  },
  {
    id: 6,
    title: "Dark",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    rating: "91% Match",
    year: "2022",
    genre: "Sci-Fi Thriller"
  }
];

const netflixOriginals = [
  {
    id: 7,
    title: "The Witcher",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop",
    rating: "88% Match",
    year: "2023",
    genre: "Fantasy Adventure"
  },
  {
    id: 8,
    title: "Bridgerton",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=450&fit=crop",
    rating: "86% Match",
    year: "2023",
    genre: "Period Romance"
  },
  {
    id: 9,
    title: "House of Cards",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    rating: "84% Match",
    year: "2022",
    genre: "Political Drama"
  },
  {
    id: 10,
    title: "Orange is the New Black",
    image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=300&h=450&fit=crop",
    rating: "87% Match",
    year: "2022",
    genre: "Comedy Drama"
  },
  {
    id: 11,
    title: "Black Mirror",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    rating: "90% Match",
    year: "2023",
    genre: "Sci-Fi Anthology"
  },
  {
    id: 12,
    title: "Narcos",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=450&fit=crop",
    rating: "92% Match",
    year: "2022",
    genre: "Crime Biography"
  }
];

const actionMovies = [
  {
    id: 13,
    title: "Extraction",
    image: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=300&h=450&fit=crop",
    rating: "85% Match",
    year: "2023",
    genre: "Action Thriller"
  },
  {
    id: 14,
    title: "6 Underground",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    rating: "82% Match",
    year: "2023",
    genre: "Action Comedy"
  },
  {
    id: 15,
    title: "The Old Guard",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    rating: "88% Match",
    year: "2022",
    genre: "Action Fantasy"
  },
  {
    id: 16,
    title: "Red Notice",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=300&h=450&fit=crop",
    rating: "83% Match",
    year: "2023",
    genre: "Action Comedy"
  },
  {
    id: 17,
    title: "Triple Frontier",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300&h=450&fit=crop",
    rating: "79% Match",
    year: "2022",
    genre: "Action Drama"
  },
  {
    id: 18,
    title: "Bright",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=450&fit=crop",
    rating: "76% Match",
    year: "2022",
    genre: "Action Fantasy"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      
      <div className="relative z-10 bg-black pb-20">
        <CategoryRow title="Trending Now" movies={trendingNow} />
        <CategoryRow title="Netflix Originals" movies={netflixOriginals} />
        <CategoryRow title="Action & Adventure" movies={actionMovies} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
