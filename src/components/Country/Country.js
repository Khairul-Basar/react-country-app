import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,population,region,flags} = props.country
    // console.log(props)
    return (
        <div className="single-country">
            <img src={flags.png} alt="" />
            <h3>Country-Name: {name.common}</h3>
            <p>
                <span style={{marginRight:'20px'}}>Capital: {capital}</span>   
                <span>Population: {population}</span>
            </p>
            <p>Region: {region}</p>
    
        </div>
    );
};

export default Country;