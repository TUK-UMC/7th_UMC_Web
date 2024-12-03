import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useGetInfiniteMovies(category){
    return useInfiniteQuery({
        queryFn:({pageParam = 1})=> useGetMovies({category, pageParam}),
        queryKey:['movies', category],
        // initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            console.log("Lastpage", lastPage)
            // 다음 페이지를 계산, `total_pages`가 API 응답에 있어야 함
            // if (lastPage.page < lastPage.total_pages) {
            //     return lastPage.page + 1;
            // }
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        }
        
    })
}

export {useGetInfiniteMovies}