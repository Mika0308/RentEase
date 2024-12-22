import { useState } from 'react';
import { Apartment } from '../../types/commom.types';

const ListProperty = () => {
  const [formData, setFormData] = useState<Partial<Apartment>>({
    title: '',
    description: '',
    price: 0,
    location: '',
    bedrooms: 1,
    bathrooms: 1,
    area: 0,
    amenities: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List Your Property</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Add form fields */}
      </form>
    </div>
  );
};

export default ListProperty;