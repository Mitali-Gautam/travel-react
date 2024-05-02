import React, {useState, useEffect} from "react";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [loading, seLoading] = useState(true);

    useEffect(() => {
        const staticcountries = [
            {id : 1 , name: "usa"},
            {id : 2 , name: "uk"},
            {id : 3 , name: "canada"},
        ];
        setCountries(staticcountries)
    },[]); //setting it empy so only one time the componet is mount

    return (
        <div>
           
            <h1>Countries</h1>
            <ul>
                {countries.map(country => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
  
        </div>
    )
}

export default Countries;