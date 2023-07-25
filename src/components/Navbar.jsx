import React from 'react'

export default function Navbar() {
    return (
        <nav className='navbar'>
          <input className='searchBaR'
            type='text'
            placeholder='Search for a country...'
            onChange={e => onSearch(e.target.value)}
          />
          <select className="selectRegion" onChange={e => onRegionFilter(e.target.value)}>
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
