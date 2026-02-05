import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  // Holds the list of shopping items
  const [items, setItems] = useState(itemData);
  // controls dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />

      {/* ✅ ItemForm owns adding */}
      <ItemForm onItemFormSubmit={handleAddItem} />

      {/* ✅ ShoppingList owns searching */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
