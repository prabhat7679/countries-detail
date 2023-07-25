import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  const [countries, setcountriesData] = useState([])
  
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');


  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setcountriesData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  useEffect(() => {
    fetchData();
  }, []);

  let seperateRegion = countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  })


  let searchedCountry = seperateRegion.filter((country) => {
    return country.name.common.toLowerCase().includes(searchResult.toLowerCase());
  })

  return (
    <>
      <Header />
      <Navbar setRegion={setRegion} setSearchResult={setSearchResult} />
      <Countries countriesData={searchedCountry} />

      {/* {countries.map((item)=>{
      return <div>{item.region}<img src={item.flags.png}/></div>})} */}
    </>
  )
}

export default App;
