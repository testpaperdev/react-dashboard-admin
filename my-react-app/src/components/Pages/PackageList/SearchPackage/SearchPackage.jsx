import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchPackage.css";

export const SearchPackage = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" style={{ color: "gray" }} />
      <input
        placeholder="Search Product..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        style={{ fontSize: "14px" }}
      />
    </div>
  );
};
