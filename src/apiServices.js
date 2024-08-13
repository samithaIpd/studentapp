import axios from 'axios';
import BASE_URL from './config';

const apiService = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  },

  post: async (endpoint, data) => {
    try {
      await axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      throw new Error('Error posting data: ' + error.message);
    }
  },

  put: async (endpoint, data) => {
    try {
      await axios.put(`${BASE_URL}/${endpoint}`, data);
    } catch (error) {
      throw new Error('Error updating data: ' + error.message);
    }
  },

  delete: async (endpoint) => {
    try {
      await axios.delete(`${BASE_URL}/${endpoint}`);
    } catch (error) {
      throw new Error('Error deleting data: ' + error.message);
    }
  }
};

export default apiService;
