import React, { useState } from "react";
import "./Advertise.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";


function Advertise({ handleSubmition }) {
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("1");
  const [selectedBathrooms, setSelectedBathrooms] = useState("1");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { user } = useAuth0 



    // Submiting a new listing
  function handleClick(e) {
    e.preventDefault();
   
    const newListing = {
      address: address,
      bedrooms: selectedBedrooms,
      bathrooms: selectedBathrooms,
      description: description,
      image: image,
      title: title,
      price: price,
      type: type,
      squareFeet: squareFeet,
    };
    if (!isAuthenticated) {
      loginWithRedirect()
    } else {
    handleSubmition(newListing);
    <NavLink to="/" />
  }}

  return (
    <div className="advertisment">
      <div className="ad-container">
        <br></br>
        <h1 className="title-ad">List your property</h1>
        <br></br>
        <form onSubmit={handleClick} className="listing-form">
          <p className="comment-form-author">
            <label for="author">Enter Property Address*</label>
          </p>
          <div>
            <input
              address="address"
              className="input-types"
              type="text"
              placeholder="Enter Property Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div>
            <p>
              <label for="type">Home Type*</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                name="home-type"
                id="type"
              >
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
              </select>
            </p>
          </div>
          <div>
            <p>
              <label for="title">Enter Listing Title*</label>
              <div>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Listing Title"
                  className="price-box"
                ></input>
              </div>
            </p>
          </div>
          <div>
            <p>
              <label for="beds">Bedrooms*</label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                name="bedrooms"
                id="beds"
              >
                =<option value="1">1 Bed</option>
                <option value="2">2 Beds</option>
                <option value="3">3 Beds</option>
                <option value="4">4 Beds</option>
                <option value="5">5 Beds</option>
                <option value="6+">6+ Beds</option>
              </select>{" "}
            </p>
          </div>
          <div>
            <p>
              <label for="baths">Bathrooms*</label>
              <select
                value={setSelectedBathrooms}
                onChange={(e) => setSelectedBathrooms(e.target.value)}
                name="bathrooms"
                id="baths"
              >
                <option value="1">1+ Baths</option>
                <option value="2">2+ Baths</option>
                <option value="3">3+ Baths</option>
              </select>
            </p>
          </div>
          <div>
            <p>
              <label for="price">Price*</label>
              <div>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  data-type="currency"
                  placeholder="Enter price"
                  className="price-box"
                ></input>
              </div>
            </p>
          </div>

          <div>
            <p>
              <label for="price">Square Feet*</label>
              <div>
                <input
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(e.target.value)}
                  type="number"
                  placeholder="Enter square feet"
                  className="price-box"
                ></input>
              </div>
            </p>
          </div>
          <div>
            <p className="comment-form-author">
              <label for="author">
                Description
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-description"
              type="text"
            ></textarea>
          </div>
          <div>
            <input
              className="url-input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Enter URL"
            ></input>
          </div>
          <br></br>
          <br></br>
          <div>
            {isAuthenticated ? (
            <button onClick={handleClick} type="submit" className="create-icon">
              Create Listing
            </button> 
            ) : (
              <button onClick={handleClick} className="create-icon" >Sign In</button>
            )}
          </div>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Advertise;
