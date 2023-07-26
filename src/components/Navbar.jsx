import React from 'react'
import { useState } from 'react';

export default function Navbar({ setRegion, setSearchResult, setSortingOrder }) {

  function onSearch(value) {
    setSearchResult(value)
  }


  function onRegionFilter(value) {
    setRegion(value);
  }

  function onSortChange(value) {
    setSortingOrder(value);
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

      <select className="selectSorting"  onChange={event => onSortChange(event.target.value)}>
        <option value=''>Sort</option>
        <option value='population-asc'>Sort by population (Ascending)</option>
        <option value='population-desc'>Sort by population (Descending)</option>
        <option value='area-asc'>Sort by area (Ascending)</option>
        <option value='area-desc'>Sort by area (Descending)</option>
      </select>


    </nav>
  );
}