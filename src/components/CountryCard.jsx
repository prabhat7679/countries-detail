import React from 'react';

function CountryCard({ img, name, population, region, capital }) {
    return (
        <div className='country-card'>
            <div className='imageClass'>
                <img src={img} alt="" />
            </div>
            <div className="allData">
                <h2> Name :{name}</h2>
                <h4>Population :{population}</h4>
                <h4>Region: {region}</h4>
                <h4>Capital :{capital}</h4>
            </div>

        </div>
    );
}
export default CountryCard;
