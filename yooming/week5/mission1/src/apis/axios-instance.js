import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
    },
    baseURL:process.env.REACT_APP_MOIVE_API_URL,
})

export {axiosInstance};