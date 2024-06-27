import React, { useEffect, useState } from 'react';
import DiscCard from './DiscCard';
import getDiscs from "../services/fetch";

const Discs = () => {
  const [discs, setDiscs] = useState([]);
  
  useEffect(() => {
    const fetchDiscs = async () => {
      try {
        const data = await getDiscs();
        setDiscs(data);
       
      } catch (err) {
       
      }
    };

    fetchDiscs();
  }, []);
  
  return(
    <div className="">
      {discs.map((disc) => (
        <DiscCard  key={disc._id} disc={disc} />
      ))}
    </div>
  )
}

export default Discs;