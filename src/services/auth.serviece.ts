import { User } from '../types/commom.types';

export const authService = {
  async login(email: string, password: string): Promise<User> {
    // Implementation will be added later
    throw new Error('Not implemented');
  },

  async register(userData: Partial<User>, password: string): Promise<User> {
    // Implementation will be added later
    throw new Error('Not implemented');
  },

  async logout(): Promise<void> {
    // Implementation will be added later
    throw new Error('Not implemented');
  },
};