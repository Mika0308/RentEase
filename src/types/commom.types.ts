export interface Apartment {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    images: string[];
    amenities: string[];
    ownerId: string;
    status: 'available' | 'rented';
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    role: 'tenant' | 'landlord';
    profileImage?: string;
  }
  
  export interface RoommateRequest {
    id: string;
    userId: string;
    preferredLocation: string;
    budget: number;
    moveInDate: Date;
    description: string;
    preferences: string[];
  }