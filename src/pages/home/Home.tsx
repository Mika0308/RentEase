import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Home
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover apartments and connect with roommates in your area
          </p>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Enter location or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;