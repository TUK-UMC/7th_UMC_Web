import {useState, useEffect} from 'react';
import {axiosInstance} from '../apis/axios-instance';
 
function useCustomFetch({ url }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try{
                const response = await axiosInstance.get(url)
                setData(response.data);
            } catch (error){
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData()
    }, [url])

    return{data,isLoading,isError}

}

export default useCustomFetch;