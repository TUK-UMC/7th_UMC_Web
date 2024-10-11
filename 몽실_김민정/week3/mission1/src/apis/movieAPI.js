import axios from "axios";

export const getNowPlayingMovies = async () => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?language=ko-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3MDgwMmY5MjA5ZTVkZWVlNjM5MjQyYzkwZTJhMSIsIm5iZiI6MTcyODUzOTg4NS42NTk2MjQsInN1YiI6IjY3MDc2YjZhZTQ2YTEyYTE5NDE5ZmNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EDz-u2_wyAPDaENqhiy9HZCNhhcY2J9fzbxQgIUxTV8",
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getPopularMovies = async () => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=ko-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3MDgwMmY5MjA5ZTVkZWVlNjM5MjQyYzkwZTJhMSIsIm5iZiI6MTcyODUzOTg4NS42NTk2MjQsInN1YiI6IjY3MDc2YjZhZTQ2YTEyYTE5NDE5ZmNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EDz-u2_wyAPDaENqhiy9HZCNhhcY2J9fzbxQgIUxTV8",
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getTopRatedMovies = async () => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3MDgwMmY5MjA5ZTVkZWVlNjM5MjQyYzkwZTJhMSIsIm5iZiI6MTcyODUzOTg4NS42NTk2MjQsInN1YiI6IjY3MDc2YjZhZTQ2YTEyYTE5NDE5ZmNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EDz-u2_wyAPDaENqhiy9HZCNhhcY2J9fzbxQgIUxTV8",
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};

export const getUpComingMovies = async () => {
  try {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=ko-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTk3MDgwMmY5MjA5ZTVkZWVlNjM5MjQyYzkwZTJhMSIsIm5iZiI6MTcyODUzOTg4NS42NTk2MjQsInN1YiI6IjY3MDc2YjZhZTQ2YTEyYTE5NDE5ZmNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EDz-u2_wyAPDaENqhiy9HZCNhhcY2J9fzbxQgIUxTV8",
        },
      }
    );
    return movies.data.results;
  } catch (error) {
    console.error("데이터를 불러오는데 실패하였습니다.");
  }
};
