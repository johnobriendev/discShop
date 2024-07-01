import React from "react";
import { useState } from "react";

const DiscFilter = ({onFilterChange}) => {
  const [filters, setFilters] = useState({
    type: '',
    weight: '',
    color: '',
    price: '',
    plastic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="p-4 border-b md:border-r md:border-b-0">
      <h2 className="text-xl font-bold mb-4">Filter Discs</h2>
      <div className="mb-4">
        <label className="block mb-2">Type</label>
        <select name="type" value={filters.type} onChange={handleChange} className="w-full p-2 border">
          <option value="">All</option>
          <option value="Distance Driver">Distance Driver</option>
          <option value="Fairway Driver">Fairway Driver</option>
          <option value="Midrange">Midrange</option>
          <option value="Putter">Putter</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Weight</label>
        <select name="weight" value={filters.weight} onChange={handleChange} className="w-full p-2 border">
          <option value="">All</option>
          <option value="150-155">150-155</option>
          <option value="156-159">156-159</option>
          <option value="160-165">160-165</option>
          <option value="166-169">166-169</option>
          <option value="170-175">170-175</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Color</label>
        <input
          type="text"
          name="color"
          value={filters.color}
          onChange={handleChange}
          className="w-full p-2 border"
          placeholder="Enter color"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Plastic</label>
        <select name="plastic" value={filters.plastic} onChange={handleChange} className="w-full p-2 border">
          <option value="">All</option>
          <option value="DX">DX</option>
          <option value="Champion">Champion</option>
          <option value="Star">Star</option>
          <option value="Pro">Pro</option>
          {/* Add other plastic types here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <select name="price" value={filters.price} onChange={handleChange} className="w-full p-2 border">
          <option value="">All</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default DiscFilter;