import MovieList from "../components/MovieList";


const HomePage = () => {
    return(
        <MovieList
        movieUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'}
        movieAutho={'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFiZTViNWY2NzZkYzNkOGE5YmZjMDBlMmQ4NTI2MCIsIm5iZiI6MTcyODM2Mjc0Ny44MTQ2MDQsInN1YiI6IjY3MDRiMjczMjIyZWFkMWVkYWMwMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TISMUO1h8dKb83DaiHfyiUlkREx0nKPpgtpo7vSEEdU'}
        />
    )
}
export default HomePage;