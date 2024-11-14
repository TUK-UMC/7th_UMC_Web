import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);

  const debounceSearch = useCallback(
    _.debounce((term) => {
      if (term === '' || term === '야호야호야호 고구마') {
        setResults(null); 
      } else {
        setResults([`검색 결과 for "${term}"`]); 
      }
    }, 300),
    []
  );

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debounceSearch(term); 
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className="logo">YONGCHA</h1>
        <nav>
          <ul>
            <li>🔍 찾기</li>
            <li>🎬 영화</li>
          </ul>
        </nav>
      </div>
      <div className="search-area">
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={() => debounceSearch(searchTerm)}>검색</button>
      </div>
      <div className="results">
        {results === null ? (
          <p className="no-results">
            해당하는 검색어 <strong>{searchTerm}</strong>에 해당하는 데이터가 없습니다.
          </p>
        ) : (
          results.map((result, index) => (
            <p key={index}>{result}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
