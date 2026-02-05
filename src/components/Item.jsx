import React, { useState } from "react";

// Item component: represents a single item in the shopping list
function Item({ name, category }) {
  // State to track whether the item is added to the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle item in/out of cart when button is clicked
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart); // Switch true/false
  }

  return (
    // Add "in-cart" class if the item is in the cart for styling
    <li className={isInCart ? "in-cart" : ""}>
      {/* Display item name */}
      <span>{name}</span>

      {/* Display item category */}
      <span className="category">{category}</span>

      {/* Button to add/remove item from cart */}
      <button
        className={isInCart ? "remove" : "add"} // Change button style based on state
        onClick={handleAddToCartClick} // Toggle cart state
      >
        {isInCart ? "Remove From" : "Add to"} Cart {/* Button text changes dynamically */}
      </button>
    </li>
  );
}

export default Item;
