import React from "react";

import "./Houses.css";
import ListingCard from "../listing/ListingCard";


function Houses ({ houses }) {


    // Mapping throught the houses array
    const mapListings = houses.map((e) => {
    
      return <ListingCard id={e.id} squareFeet={e.squareFeet} address={e.address} selectedBedrooms={e.bedrooms} selectedBathrooms={e.bathrooms} price={e.price} image={e.image} title={e.title} description={e.description} /> 
    })
 
    return (
      <ul className="cards">
          {mapListings}
      </ul>
    );
};

export default Houses;
