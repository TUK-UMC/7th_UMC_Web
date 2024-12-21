import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="영화 제목을 입력해주세요..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>검색</button>
    </div>
  );
};

export default SearchBar;
