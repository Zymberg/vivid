import React from "react";
import "./Apartments.css";
import ListingCard from "../listing/ListingCard";



function Apartments({apartments}) {

  // Mapping throught the apartments array
    const mapApartments = apartments.map((e) => {
      return <ListingCard id={e.id} squareFeet={e.squareFeet} address={e.address} selectedBedrooms={e.bedrooms} selectedBathrooms={e.bathrooms} price={e.price} image={e.image} title={e.title} description={e.description} /> 
    })

    return (
      <ul className="cards">
          {mapApartments}
      </ul>
    );
}

export default Apartments;
