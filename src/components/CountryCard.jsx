import React from 'react';

function CountryCard({ img, name, population, region, capital }) {
    return (
        <div className='country-card'>
            <div className='imageClass'>
                <img src={img} alt="" />
            </div>
            <div className="allData">
                <h2> Name :{name}</h2>
                <h5>Population :{population}</h5>
                <h5>Region: {region}</h5>
                <h5>Capital :{capital}</h5>
            </div>

        </div>
    );
}
export default CountryCard;
