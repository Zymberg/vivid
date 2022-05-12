import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import ListingCard from '../listing/ListingCard';
import { NavLink } from 'react-router-dom';
import { MdOutlineBedroomParent, MdOutlineBathroom, MdSquareFoot } from "react-icons/md";
import "./Favorites.css"
import Card from '../card/Card';
import FavoriteCard from './FavoriteCard';


function Favorites() {

  const [favorites, setFavorites] = useState([])


// Fetching data for a specific listing
useEffect(() => {
  fetch(`http://localhost:3600/favorites`)
    .then((response) => response.json())
    .then((data) => setFavorites(data));
}, []);

function removeFromFavorites(listing){
  fetch(`http://localhost:3600/favorites/${listing.id}`, {
      method: "DELETE"
  })
     .then((response) => response.json())
     .then(data => setFavorites(data))
 }

  const mapFavs = favorites.map((f) => {
    return <FavoriteCard listing={f} address={f.address} removeFromFavorites={removeFromFavorites} image={f.image} squareFeet={f.squareFeet} price={f.price} bathrooms={f.bathrooms} bedrooms={f.bathrooms} description={f.description} />
  })

return (
     <ul className='cards'>
      {mapFavs}
    </ul>
    );
}

export default Favorites;