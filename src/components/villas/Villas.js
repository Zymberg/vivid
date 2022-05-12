import React from "react";
import "./Villas.css";
import ListingCard from "../listing/ListingCard";


function Villas({villas}) {


    // Mapping throught the villas array
    const mapVillas = villas.map((e) => {
      return <ListingCard id={e.id} squareFeet={e.squareFeet} address={e.address} selectedBedrooms={e.bedrooms} selectedBathrooms={e.bathrooms} price={e.price} image={e.image} title={e.title} description={e.description} /> 
    })

    return (
      <ul className="cards">
          {mapVillas}
        </ul>
    );
}

export default Villas;

