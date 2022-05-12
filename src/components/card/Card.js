import React, { useEffect, useState } from "react";
import { MdOutlineBedroomParent, MdOutlineBathroom, MdSquareFoot, MdAddComment} from "react-icons/md";
import "./Card.css"
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom"



function Card() {

  const [favorite, setFavorite] = useState([])
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const params = useParams()

  const [currentListing, setCurrentListing] = useState([]);

  // Fetching data for a specific listing
  useEffect(() => {
    fetch(`http://localhost:3500/listings/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCurrentListing(data));
  }, [params.id]);


  function addToFav(e) {
    e.preventDefault()

    if (!isAuthenticated){
      loginWithRedirect()
    }
      const newFav = {
        image: image,
        address: address,
        squareFeet: squareFeet,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        description: description,
      }
    fetch("http://localhost:3600/favorites", {
      method: "POST",
      body: JSON.stringify(newFav),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())

      setFavorite(!favorite)
  }


  const { address, image, squareFeet, price, bathrooms, bedrooms, description } = currentListing
 

    function removeFromFav(listing){
      fetch(`http://localhost:3600/favorites/${listing.id}`, {
        method: "DELETE"
      })
      .then((response) => response.json())
      setFavorite(!favorite)
    }


  return ( 
    <div className="main-cnt">  
     <div className="img-container">
        <img src={image} />
      </div>  
      <br></br>
      <div className="info-container">
       <div className="address"> <h2>{address}</h2> </div>
        <br></br>
        <div>
        <h3 className="price">${price}</h3></div>
        <br></br>
        <div className="details-container">
        <ul className="horizontal-list">
           <li><h4>
              <MdOutlineBedroomParent /> {bedrooms}{" "}
            </h4></li>
            <li> <h4>
              <MdOutlineBathroom /> {bathrooms}{" "}
              </h4></li>
              <li> <h4>
              <MdSquareFoot /> {squareFeet}{" "}
            </h4></li>
        </ul></div>
        <br></br>
      </div>
      <div className="description-container">
        <text>{description}</text>
      </div>
      <div class="review-btn">
        {favorite ? (
      <button class="button-15" role="button" onClick={addToFav} >Add to Favorites</button>
        ) :( 
        <button class="button-15" role="button" >Added to Favorites</button>
        )}
      </div>
    </div>
  );
}

export default Card;




