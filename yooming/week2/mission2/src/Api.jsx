import axios from 'axios';

const API_URL = 'http://localhost:3005/';

export const fetchMovies = async () => {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
};
