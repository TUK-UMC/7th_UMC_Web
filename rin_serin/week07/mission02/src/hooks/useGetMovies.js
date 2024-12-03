import { axiosInstance } from "../apis/axios-instance";

const useGetMovies = async({category, pageParam})=>{
    const {data} = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`);

    // console.log("Fetched data:", data); // 디버깅용
    return data;
}

export {useGetMovies}