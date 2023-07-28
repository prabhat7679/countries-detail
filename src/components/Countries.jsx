import React from 'react';
import CountryCard from './CountryCard';
import { DarkModeContext } from '../App'
import { useContext } from 'react';

export default function Countries({ countriesData }) {
    // console.log(countriesData[0].cca3)
    const [darkTheme, setDarkTheme]= useContext(DarkModeContext)

    return (
        <>
            {<div className={darkTheme && 'container Dark' || 'container'}>
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
