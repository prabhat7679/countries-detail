import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../App';

function CountryCard({ value, img, name, population, region, capital }) {
    // console.log(value)

    const [darkTheme, setDarkTheme]=useContext(DarkModeContext);

    return (
        <div className= 'country-card' >
            <Link to={`/country/${value}`}>  <div className='imageClass'>
                <img src={img} alt="" />
            </div>

                <div className={darkTheme && 'allData Dark' || 'allData' }>
                    <h2> Name :{name}</h2>
                    <h4>Population :{population}</h4>
                    <h4>Region: {region}</h4>
                    <h4>Capital :{capital}</h4>
                </div>
            </Link>
        </div>
    );
}
export default CountryCard;
