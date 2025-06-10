import React from "react";
import "./SearchSection.scss";

const SearchSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submit
  };

  return (
    <div className="search-section">
      <form className="search-section__container" onSubmit={handleSubmit}>
        <div className="search-section__input-group">
          <input
            type="text"
            className="search-section__input"
            placeholder="Medical condition"
            aria-label="Medical condition"
          />
        </div>
        <div className="search-section__input-group">
          <input
            type="text"
            className="search-section__input"
            placeholder="City"
            aria-label="City"
          />
        </div>
        <div className="search-section__input-group">
          <input
            type="text"
            className="search-section__input"
            placeholder="Insurance provider"
            aria-label="Insurance provider"
          />
        </div>
        <button type="submit" className="search-section__button">
          Find now
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
