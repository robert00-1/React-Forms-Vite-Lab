import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // ✅ For generating unique IDs for each new item

// ItemForm component: allows users to add a new item to the shopping list
function ItemForm({ onItemFormSubmit }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "", // Item name input field
    category: "Produce", // Default selected category
  });

  // Handle input changes for both name and category fields
  function handleChange(e) {
    const { name, value } = e.target;

    // Update the corresponding property in formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default page reload

    // Create a new item object with a unique id
    const newItem = {
      id: uuid(), // Unique ID generated for each item
      name: formData.name,
      category: formData.category,
    };

    // Pass the new item to the parent component (App)
    onItemFormSubmit(newItem);

    // Reset form fields to initial state after submission
    setFormData({
      name: "",
      category: "Produce",
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* Input for item name */}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name} // Controlled input
        onChange={handleChange} // Update state on change
      />

      {/* Dropdown select for category */}
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={formData.category} // Controlled select
        onChange={handleChange} // Update state on change
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      {/* Submit button */}
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
