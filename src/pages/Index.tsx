
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryRow from '../components/CategoryRow';
import Footer from '../components/Footer';

// Mock data for different categories with real movie/show data
const trendingNow = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "97% Match",
    year: "2023",
    genre: "Sci-Fi Drama"
  },
  {
    id: 2,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    rating: "92% Match",
    year: "2023",
    genre: "Historical Drama"
  },
  {
    id: 3,
    title: "Wednesday",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop",
    rating: "89% Match",
    year: "2023",
    genre: "Dark Comedy"
  },
  {
    id: 4,
    title: "Money Heist",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "95% Match",
    year: "2023",
    genre: "Crime Thriller"
  },
  {
    id: 5,
    title: "Ozark",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop",
    rating: "93% Match",
    year: "2022",
    genre: "Crime Drama"
  },
  {
    id: 6,
    title: "Dark",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    rating: "91% Match",
    year: "2022",
    genre: "Sci-Fi Thriller"
  }
];

const netflixOriginals = [
  {
    id: 7,
    title: "The Witcher",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    rating: "88% Match",
    year: "2023",
    genre: "Fantasy Adventure"
  },
  {
    id: 8,
    title: "Bridgerton",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop",
    rating: "86% Match",
    year: "2023",
    genre: "Period Romance"
  },
  {
    id: 9,
    title: "House of Cards",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "84% Match",
    year: "2022",
    genre: "Political Drama"
  },
  {
    id: 10,
    title: "Orange is the New Black",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop",
    rating: "87% Match",
    year: "2022",
    genre: "Comedy Drama"
  },
  {
    id: 11,
    title: "Black Mirror",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    rating: "90% Match",
    year: "2023",
    genre: "Sci-Fi Anthology"
  },
  {
    id: 12,
    title: "Narcos",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    rating: "92% Match",
    year: "2022",
    genre: "Crime Biography"
  }
];

const actionMovies = [
  {
    id: 13,
    title: "Extraction",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
    rating: "85% Match",
    year: "2023",
    genre: "Action Thriller"
  },
  {
    id: 14,
    title: "6 Underground",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop",
    rating: "82% Match",
    year: "2023",
    genre: "Action Comedy"
  },
  {
    id: 15,
    title: "The Old Guard",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop",
    rating: "88% Match",
    year: "2022",
    genre: "Action Fantasy"
  },
  {
    id: 16,
    title: "Red Notice",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    rating: "83% Match",
    year: "2023",
    genre: "Action Comedy"
  },
  {
    id: 17,
    title: "Triple Frontier",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    rating: "79% Match",
    year: "2022",
    genre: "Action Drama"
  },
  {
    id: 18,
    title: "Bright",
    image: "https://images.unsplash.com/photo-1489599510025-8c8ad0fa7ae2?w=300&h=450&fit=crop",
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
