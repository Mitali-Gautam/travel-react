import axios from "axios";

const API_BASE_URL = 'http://127.0.0.1:8000/api/';



const HotelsService = async () => {
    try {
      const response = await axios.get(API_BASE_URL+'hotels');
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export default HotelsService