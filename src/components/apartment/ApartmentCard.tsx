import { Apartment } from '../../types/commom.types';

interface Props {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={apartment.images[0]} 
        alt={apartment.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{apartment.title}</h3>
        <p className="text-gray-600">{apartment.location}</p>
        <p className="text-blue-600 font-bold mt-2">${apartment.price}/month</p>
        <div className="flex mt-2 text-sm text-gray-500">
          <span>{apartment.bedrooms} beds</span>
          <span className="mx-2">•</span>
          <span>{apartment.bathrooms} baths</span>
          <span className="mx-2">•</span>
          <span>{apartment.area} sqft</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;