import React from 'react'
import { useState } from 'react';

export default function Navbar({ setRegion, setSearchResult }) {

  const [sortingOrder, setSortingOrder] = useState('asc');

  function onSearch(value) {
    setSearchResult(value)
  }


  function onRegionFilter(value) {
    setRegion(value);
  }



  return (
    <nav className='navbar'>
      <input className='searchBaR'
        type='text'
        placeholder='Search for a country...'
        onChange={event => onSearch(event.target.value)}
      />
      <select className="selectRegion" onChange={event => onRegionFilter(event.target.value)}>
        <option value=''>Filter by region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>

      
    </nav>
  );
}
