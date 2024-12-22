import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Apartment } from '../../types/commom.types';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: 0,
    location: ''
  });

  // Mock data - replace with actual API call
  useEffect(() => {
    // Fetch apartments based on search params and filters
  }, [searchParams, filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-6">
        {/* Filters sidebar */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {/* Add filter controls here */}
        </div>
        
        {/* Search results */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apt) => (
              <div key={apt.id} className="bg-white rounded-lg shadow">
                {/* Apartment card content */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;