import React, { useState, useEffect } from "react";
import Type from "./components/type/Type";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Advertise from "./components/advertise/Advertise";
import Contact from "./components/contact/Contact";
import Card from "./components/card/Card";
import Favorites from "./components/favorites/Favorites";



function App() {
  const [listingArray, setListingArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  // fetching the data
  useEffect(() => {
    fetch("http://localhost:3500/listings")
      .then((response) => response.json())
      .then((data) => setListingArray(data));
  }, []);


  // Adding a new listing
  function handleSubmition(newListing) {
    setListingArray([...listingArray, newListing]);
    fetch("http://localhost:3500/listings", {
      method: "POST",
      body: JSON.stringify(newListing),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setListingArray(data));
      
  }


  // Searching through the listings
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }


  // Filtering throught listings array
  const filteredList = listingArray.filter((l) => {
    return l.address.toLowerCase().includes(searchQuery.toLowerCase());
  });


  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
          <Type filteredList={filteredList} handleSearch={handleSearch} />
        </Route>
      </Switch>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/advertise">
          <Advertise handleSubmition={handleSubmition} />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route  path="/favorites" component={Favorites} />
      </Switch>

      <Switch>
        <Route exact path="/listings/:id" component={Card}  />
      </Switch>
  

      <Footer />
    </Router>
  );
}

export default App;
