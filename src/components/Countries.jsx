import React from 'react';
import CountryCard from './CountryCard';

export default function Countries({ countriesData }) {
    // console.log(countriesData[0].cca3)
    return (
        <>
            {<div className='container'>
                {countriesData.length == 0 ? (<h2> No Countries Found ...</h2>) :
                    (
                        countriesData.map(country => (
                            <CountryCard
                               value ={country.cca3}
                                key={country.name.common}
                                img={country.flags.png}
                                name={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}

                            />
                        ))
                    )
                }
            </div>}
        </>
    );
}
