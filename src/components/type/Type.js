import React, { useState } from 'react'
import Houses from '../houses/Houses'
import Villas from '../villas/Villas'
import Search from '../search/Search'

import './Type.css'
import Apartments from '../apartments/Apartments'


function Type ({filteredList, handleSearch}) {

    const [active, setActive] = useState("Villas")

    const apartments = filteredList.filter((a) => {
        return a.type === "Apartment"
    }) 

    const houses = filteredList.filter((a) => {
        return a.type === "House"
    }) 

    const villas = filteredList.filter((a) => {
        return a.type === "Villa"
    }) 

    return (
        <div className='type'>
            <h1>Find your home</h1>
                <p className='search-text'> Search the largest selection of luxury homes, villas and apartments. </p>
                <Search handleSearch={handleSearch}/>
            <nav>
                
                <button className='button-4' onClick={() => setActive("Houses")} >Houses</button>
                <button className='button-4' onClick={() => setActive("Villas")} >Villas</button>
                <button className='button-4' onClick={() => setActive("Apartments")} >Apartments</button> 
            </nav>
            <div>
                {active === "Houses" && <Houses houses={houses} title="Houses" />}
                {active === "Villas" && <Villas villas={villas} title="Villas" />}
                {active === "Apartments" && <Apartments apartments={apartments} title="Apartments" />}
            </div>
        </div>
    )
}

export default Type