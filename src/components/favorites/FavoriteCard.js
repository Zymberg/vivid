import React from 'react';
import { MdOutlineBedroomParent, MdOutlineBathroom, MdSquareFoot, MdAddComment} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import "./FavoriteCard.css"

function FavoriteCard({ address, listing, squareFeet, selectedBedrooms,removeFromFavorites, selectedBathrooms, image, price, description}) {

    // function handleRemove(listing){

    //  removeFromFavorites(listing)
    // }

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
            <button className="primary-view3" onClick={() => removeFromFavorites(listing)}>Remove From Favorite</button>

      </li>
    );
}

export default FavoriteCard;