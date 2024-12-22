import { useState } from 'react';
import { RoommateRequest } from '../../types/commom.types';

const RoommateSearch = () => {
  const [requests, setRequests] = useState<RoommateRequest[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find a Roommate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Roommate request cards */}
      </div>
    </div>
  );
};

export default RoommateSearch;