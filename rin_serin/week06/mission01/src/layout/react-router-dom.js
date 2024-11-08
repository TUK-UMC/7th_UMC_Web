import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieIdPage from './pages/MovieIdPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList movieUrl="API_URL_HERE" />} />
                <Route path="/movies/:movieId" element={<MovieIdPage />} />
            </Routes>
        </Router>
    );
}

export default App;
