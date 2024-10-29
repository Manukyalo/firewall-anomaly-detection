import axios from 'axios';

const apiService = async (action) => {
  try {
    const response = await axios.post(`http://localhost:5000/${action}`);
    return response.data;
  } catch (error) {
    console.error(`Error during ${action} action`, error);
    throw error;
  }
};

export default apiService;
