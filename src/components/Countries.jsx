import React from 'react';
import CountryCard from './CountryCard';

export default function Countries({ countriesData }) {
    // console.log(countriesData)
    return (
        <>
            {<div className='container'>
                {countriesData.map(country => (
                    <CountryCard
                        key={country.name.common}
                        img={country.flags.png}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}

                    />
                ))}
            </div>}
        </>
    );
}
