import axios from 'axios';
import { mockResponses } from './mockData';

const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const searchAPI = async (query) => {
  // If API_URL is not defined or in development mode, use mock data
  if (!API_URL || process.env.REACT_APP_USE_MOCK_DATA === 'true') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a random mock response
    const randomIndex = Math.floor(Math.random() * mockResponses.length);
    return mockResponses[randomIndex];
  }

  try {
    const response = await axios.post(`${API_URL}/search`, { query });
    return response.data;
  } catch (error) {
    console.warn('API Error:', error);
    // Fallback to mock data if API fails
    const randomIndex = Math.floor(Math.random() * mockResponses.length);
    return mockResponses[randomIndex];
  }
}; 