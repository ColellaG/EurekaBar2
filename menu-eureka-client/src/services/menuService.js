import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const menuService = {
  getCategories: async () => {
    try {
      console.log('Solicitando categorías a:', `${API_URL}/categories/`);
      const response = await axios.get(`${API_URL}/categories/`);
      console.log('Respuesta de categorías:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error detallado al obtener categorías:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      throw error;
    }
  },

  getMenuItems: async () => {
    try {
      console.log('Solicitando ítems a:', `${API_URL}/items/`);
      const response = await axios.get(`${API_URL}/items/`);
      console.log('Respuesta de ítems:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error detallado al obtener ítems:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      throw error;
    }
  }
};

export default menuService; 