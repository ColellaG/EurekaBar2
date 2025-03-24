import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const menuService = {
  getCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/categories/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  getMenuItems: async () => {
    try {
      const response = await axios.get(`${API_URL}/items/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  }
};

export default menuService; 