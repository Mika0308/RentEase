import { Apartment, User, RoommateRequest } from '../types/commom.types';

export const api = {
  apartments: {
    getAll: async (): Promise<Apartment[]> => {
      // Implementation
      return [] as Apartment[];
    },
    getById: async (id: string): Promise<Apartment> => {
      // Implementation
      return {} as Apartment;
    },
    create: async (apartment: Omit<Apartment, 'id'>): Promise<Apartment> => {
      // Implementation
      return {} as Apartment;
    }
  },
  users: {
    getCurrentUser: async (): Promise<User> => {
      // Implementation
      return {} as User;
    },
    updateProfile: async (user: Partial<User>): Promise<User> => {
      // Implementation
      return {} as User;
    }
  },
  roommates: {
    getRequests: async (): Promise<RoommateRequest[]> => {
      // Implementation
      return [] as RoommateRequest[];
    },
    createRequest: async (request: Omit<RoommateRequest, 'id'>): Promise<RoommateRequest> => {
      // Implementation
      return {} as RoommateRequest;
    }
  }
};