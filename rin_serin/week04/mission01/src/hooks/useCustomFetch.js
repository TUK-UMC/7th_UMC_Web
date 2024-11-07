import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setIsLoading(true);
            try{
                const response = await axiosInstance.get(url,{
                    params: {
                        language: 'ko-KR', // 한국어를 요청하는 파라미터 추가
                    }
                });
                setDatas(response.data);
                setIsLoading(false);
                // let response;
                // if (url.startsWith("/movie")) { // 상세 정보 URL일 경우
                //     response = await axiosInstance.get(`${url}&api_key=YOUR_API_KEY`);
                // } else { // 목록 URL일 경우
                //     response = await axiosInstance.get(url);
                // }
                // setDatas(response.data);

            } catch(error){
                setIsError(true);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return{datas, isLoading, isError}
}

export default useCustomFetch;