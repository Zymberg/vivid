import React, { Component, useState } from "react";
import "./ListingCard.css"
import { MdOutlineBedroomParent, MdOutlineBathroom, MdSquareFoot } from "react-icons/md";
import { NavLink } from "react-router-dom";


function ListingCard({ address, id, squareFeet, selectedBedrooms, selectedBathrooms, image, price, description }) {



     return (

        <li className="card">
          <img className="img-listing" src={image} />
          <h4>{address}</h4>
          <br></br>
          <div className="price1">
          <h4 >${price}</h4></div>
          <br></br>
          <ul className="horizontal-list1">
             <li> <h5><MdOutlineBedroomParent /> {selectedBedrooms} </h5></li>
             <li><h5><MdOutlineBathroom /> {selectedBathrooms} </h5></li>
             <li> <h5><MdSquareFoot /> {squareFeet} </h5></li>
              </ul>
          <text>{description}
          </text>
          <br></br>
          <br></br>
          <NavLink to="/contact">
          <button className="primary-view">Contact</button>
          </NavLink>

          <NavLink to={`/listings/${id}`}>
           <button className="primary-button"> View</button>
         </NavLink>
         
        </li>
  );
}

export default ListingCard;


