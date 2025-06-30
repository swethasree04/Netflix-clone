
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', email.split('@')[0]);
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      setName(email.split('@')[0]);
      alert('Successfully logged in!');
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setName('');
    setEmail('');
    setPassword('');
    alert('Successfully logged out!');
    navigate('/');
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        
        <div className="pt-20 px-4 md:px-16">
          <div className="max-w-md mx-auto bg-zinc-900 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Profile</h1>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-400">{localStorage.getItem('userEmail')}</p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => navigate('/my-list')}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  My List
                </Button>
                <Button 
                  onClick={() => alert('Account settings would open here')}
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800"
                >
                  Account Settings
                </Button>
                <Button 
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20 px-4 md:px-16">
        <div className="max-w-md mx-auto bg-zinc-900 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Sign In</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Sign In
            </Button>
          </form>
          
          <p className="text-center text-gray-400 mt-6">
            New to Netflix? 
            <button 
              onClick={() => alert('Sign up functionality would be implemented here')}
              className="text-white hover:underline ml-1"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
