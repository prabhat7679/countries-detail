import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  const [countries, setcountriesData] = useState([]);
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [sortingOrder, setSortingOrder] = useState('');
  const [subregion, setSubRegion] = useState([]);
  const [dataOfSubRegion, setDataOfSubRegion] = useState([])
  const [error, setError]= ('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setcountriesData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  //  seperate by region 
  let seperateRegion = countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  })

  //     find subRegion form the seperate Region 
  let subRegionData = seperateRegion.reduce((acc, country) => {

    let findSubRegion = country.subregion;

    if (findSubRegion in acc) {
      acc[findSubRegion].push(country);
    } else {
      acc[findSubRegion] = [country];
    }
    return acc;
  }, {});


  //when region change useEffect called and it will set setSubRegion
  useEffect(() => {
    setSubRegion(Object.keys(subRegionData));
  }, [region])

  //    country inside subregion 

  let dataSubRegion = seperateRegion.filter((country) => {
    if (country.subregion == undefined) {
      return true;
    } else {
      return country.subregion.includes(dataOfSubRegion)
    }
  })


  // search bar 
  let searchedCountry = dataSubRegion.filter((country) => {
    return country.name.common.toLowerCase().includes(searchResult.toLowerCase());
  })

  // sorting function 
  if (sortingOrder !== '') {
    searchedCountry.sort((country1, country2) => {
      if (sortingOrder == 'population-asc') {

        return (country1.population - country2.population);

      } else if (sortingOrder == 'population-desc') {

        return (country2.population - country1.population);

      } else if (sortingOrder == 'area-asc') {

        return (country1.area - country2.area);

      } else if (sortingOrder == 'area-desc') {

        return (country2.area - country1.area);

      }
    })
  }

  return (
    <>
   
      <div className="main-container">
        <Header />
        <Navbar
          setRegion={setRegion}
          setSearchResult={setSearchResult}
          setSortingOrder={setSortingOrder}
          subregion={subregion}
          setDataOfSubRegion={setDataOfSubRegion}
        />
        <Countries countriesData={searchedCountry} />
      </div>
    </>
  )
}

export default App;

