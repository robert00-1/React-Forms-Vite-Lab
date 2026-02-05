import React from "react";

// Header component: displays the app title, search input, and dark mode toggle
function Header({
  isDarkMode,        // Boolean: true if dark mode is active
  onDarkModeClick,   // Function: toggles dark/light mode
  searchText,        // String: current value of the search input
  onSearchChange,    // Function: updates search text in parent component
}) {
  return (
    <header>
      {/* App title */}
      <h2>Shopster</h2>

      {/* Search input field (controlled input) */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchText}                   // Controlled input value
        onChange={(e) => onSearchChange(e.target.value)} // Update parent state on change
      />

      {/* Button to toggle dark/light mode */}
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode {/* Button text changes dynamically */}
      </button>
    </header>
  );
}

export default Header;
