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