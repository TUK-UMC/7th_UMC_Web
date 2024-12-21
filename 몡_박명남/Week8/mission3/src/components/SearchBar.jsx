import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 20px auto;
  display: block;
  font-size: 18px;
  border-radius: 5px;
  border: none;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
