import React, { useEffect, useState } from 'react';
import DiscCard from './DiscCard';
import getDiscs from "../services/fetch";
import DiscFilter from "./DiscFilter"

const Discs = () => {
  const [discs, setDiscs] = useState([]);
  const [filteredDiscs, setFilteredDiscs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [showFilters, setShowFilters] = useState(true); 

  useEffect(() => {
    const fetchDiscs = async () => {
      try {
        const data = await getDiscs();
        setDiscs(data);
        setFilteredDiscs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchDiscs();
  }, []);
  
  const handleFilterChange = (filters) => {
    let updatedDiscs = [...discs];

    if (filters.type) {
      updatedDiscs = updatedDiscs.filter(disc => disc.disc.disctype.name === filters.type);
    }
    if (filters.weight) {
      updatedDiscs = updatedDiscs.filter(disc => disc.weight >= filters.weight.split('-')[0] && disc.weight <= filters.weight.split('-')[1]);
    }
    if (filters.color) {
      updatedDiscs = updatedDiscs.filter(disc => disc.color.toLowerCase().includes(filters.color.toLowerCase()));
    }
    if (filters.plastic) {
      updatedDiscs = updatedDiscs.filter(disc => disc.plastic === filters.plastic);
    }
    if (filters.price) {
      updatedDiscs = updatedDiscs.sort((a, b) => filters.price === 'low-to-high' ? a.price - b.price : b.price - a.price);
    }

    setFilteredDiscs(updatedDiscs);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full bg-blue-500 text-white p-2 mb-4 md:hidden"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {showFilters && (
          <DiscFilter onFilterChange={handleFilterChange} />
        )}
      </div>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-4 md:w-3/4">
        {loading ? (
          <div className="text-xl">Loading discs...</div>
        ) : (
          filteredDiscs.map((disc) => (
            <DiscCard key={disc._id} disc={disc} />
          ))
        )}
      </div>
    </div>
  );
  

}

export default Discs;