import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const fetchData = async (url) => {
    const response = await axiosInstance.get(url, {
        params:{
            language: 'ko-KR',
        }
    });
    return response.data
}

const useCustomFetch = (url) => {
    // const [datas, setDatas] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);

    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         setIsLoading(true);
    //         try{
    //             const response = await axiosInstance.get(url,{
    //                 params: {
    //                     language: 'ko-KR', // 한국어를 요청하는 파라미터 추가
    //                 }
    //             });
    //             setDatas(response.data);
    //             setIsLoading(false);

    //         } catch(error){
    //             setIsError(true);
    //         } finally{
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, [url]);
    const {data: datas, isLoading, isError} = useQuery({
            queryKey: ["customFetch", url],
            queryFn: () => fetchData(url),
            enabled: !!url, // URL이 있을 때만 요청 실행
            refetchOnWindowFocus: false, // 윈도우 포커스 시 리페치 방지
            retry: false // 요청 실패 시 재시도 방지 (필요에 따라 조정 가능)
    })

    return{datas, isLoading, isError}
}

export default useCustomFetch;