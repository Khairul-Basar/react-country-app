import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries,setCountries]= useState([])
    const [filterCounries, setFilterCountries] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => {
            setCountries(data)
            setFilterCountries(data)
        })
    },[])

    const searchHandle = (event) =>{
        const searchText = event.target.value 
        const matchedProduct = countries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
        setFilterCountries(matchedProduct)
    }

    return (
        <>
            <div className="search-container">
                <h1>Total Countries: {countries.length}</h1>
                <input 
                    type="text"
                    onChange={searchHandle}
                    placeholder="Search Country" 
                />
            </div>
            <div>
                
                <div className="countries-style">
                    {
                        filterCounries.map(country => {
                            return <Country key={country.cca3} country={country}></Country>
                            
                        })
                    }
                </div>
                
            </div>
        </>
    );
};

export default Countries;