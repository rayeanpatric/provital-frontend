import React from "react";
import "./SearchSection.scss";

const SearchSection = () => {
  return (
    <div className="search-section">
      <form
        className="search-section__container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="search-section__input-group">
          <span className="search-section__icon">🔍</span>
          <input
            type="text"
            className="search-section__input"
            placeholder="Condition, procedure, specialty..."
            aria-label="Search for condition, procedure, or specialty"
          />
        </div>

        <div className="search-section__input-group">
          <span className="search-section__icon">📍</span>
          <input
            type="text"
            className="search-section__input"
            placeholder="City, state, or zipcode"
            aria-label="Enter city, state, or zipcode"
          />
        </div>

        <div className="search-section__input-group">
          <span className="search-section__icon">🏥</span>
          <input
            type="text"
            className="search-section__input"
            placeholder="Insurance carrier"
            aria-label="Enter insurance carrier"
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
