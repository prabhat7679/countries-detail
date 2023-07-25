import { useState, useEffect } from 'react'
import './App.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  const [countries, setcountriesData] = useState([])

  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(data => {
        return data.json();
      })
      .then(data => {
        // console.log(data[0]);
        setcountriesData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  useEffect(() => {
    fetchData();
  }, []);



  // console.log("axnjnx . " + countries)
  return (
    <>
    <Header />
    <Navbar />
      <Countries countriesData={countries} />

      {/* {countries.map((item)=>{
      return <div>{item.region}<img src={item.flags.png}/></div>})} */}
    </>
  )
}

export default App
