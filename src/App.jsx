import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Loader from './components/Loader'
import DetailData from './components/DetailData'
import { Route, Routes } from 'react-router-dom'
import CountryCard from './components/CountryCard'

function App() {
  // const [darkTheme, setDarkTheme]=useState(true);
  const [countries, setcountriesData] = useState([]);
  const [region, setRegion] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [sortingOrder, setSortingOrder] = useState('');
  const [subRegion, setSubRegion] = useState('');

  const [Error, setError] = useState('');
  const [loading, setLoading] = useState(true);


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

      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  // function toggleTheme(){
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  //  seperate by region 
  let seperateRegion = countries.filter((country) => {
    return country.region.toLowerCase().includes(region.toLowerCase());
  })

  //     find subRegion form the seperate Region 
  let subRegionData = [];

  if (region !== '') {
    subRegionData = seperateRegion.reduce((acc, country) => {

      let findSubRegion = country.subregion;

      if (findSubRegion in acc) {
        acc[findSubRegion].push(country);
      } else {
        acc[findSubRegion] = [country];
      }
      return acc;
    }, {});
  }

  const dataSubRegion = seperateRegion.filter((country) => {
    return country.subregion?.toLowerCase().includes(subRegion.toLowerCase());
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

  // console.log(searchedCountry[0])
  return (
    <>
      <div className="main-container">

        {loading ? (<Loader />) :
          (
            <Routes>

              <Route path="/" element={
                <> <Header />
                  <Navbar
                    setRegion={setRegion}
                    setSearchResult={setSearchResult}
                    setSortingOrder={setSortingOrder}
                    subRegion={Object.keys(subRegionData)}
                    setSubRegion={setSubRegion}
                  />
                  <Countries countriesData={searchedCountry} />
                </>}>
              </Route>

              <Route path='/country/:id' element={<><Header /><DetailData searchedCountry={countries} /></>}>

              </Route>

            </Routes>)}
      </div>


    </>
  )
}

export default App;

