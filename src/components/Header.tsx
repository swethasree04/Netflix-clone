
import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    alert(`${section} section - This would navigate to the ${section} page`);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  const handleNotifications = () => {
    console.log('Opening notifications');
    alert('Notifications - This would show your notifications');
  };

  const handleProfile = () => {
    console.log('Opening profile menu');
    alert('Profile Menu - This would show account options, settings, sign out, etc.');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 
            className="text-red-600 text-2xl md:text-3xl font-bold cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => handleNavClick('Home')}
          >
            NETFLIX
          </h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => handleNavClick('Home')}
              className="hover:text-gray-300 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('TV Shows')}
              className="hover:text-gray-300 transition-colors font-medium"
            >
              TV Shows
            </button>
            <button 
              onClick={() => handleNavClick('Movies')}
              className="hover:text-gray-300 transition-colors font-medium"
            >
              Movies
            </button>
            <button 
              onClick={() => handleNavClick('New & Popular')}
              className="hover:text-gray-300 transition-colors font-medium"
            >
              New & Popular
            </button>
            <button 
              onClick={() => handleNavClick('My List')}
              className="hover:text-gray-300 transition-colors font-medium"
            >
              My List
            </button>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-black/70 border border-gray-600 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-white w-64"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleSearchToggle}
                  className="ml-2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </form>
            ) : (
              <Search 
                className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" 
                onClick={handleSearchToggle}
              />
            )}
          </div>
          
          <Bell 
            className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" 
            onClick={handleNotifications}
          />
          
          <div 
            className="w-8 h-8 bg-red-600 rounded cursor-pointer hover:bg-red-700 transition-colors flex items-center justify-center"
            onClick={handleProfile}
          >
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
