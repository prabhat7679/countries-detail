import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../App'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export default function DetailfindCountry({ searchedCountry }) {

    const [darkTheme, setDarkTheme] = useContext(DarkModeContext)
    const navigate = useNavigate()

    const id = useParams().id;
    // console.log(id)

    //   filter the details of selected country 
    let findCountry = searchedCountry.filter((country) => {
        return country.cca3 == id;
    })

    // console.log(findCountry)
    function goBack() {
        navigate(-1)
    }
    return (
        <div class={darkTheme && "detailPageContainer Dark" || "detailPageContainer"}>
            <div className='countryPage' >

                <button className='Back' onClick={goBack}> Back</button>

            </div>
            <div className='allDetails'>

                <div className="image">
                    <img src={findCountry[0].flags.svg} alt="image" className='img' />
                </div>

                <div className="details">
                    <div className="nameDetails">

                        <div className="leftPart">
                            <h2 className='countryName'>{findCountry[0].name.common}</h2>
                            <p>Native Name : {Object.values(findCountry[0].name.nativeName)[0].common}</p>
                            <p>population: {findCountry[0].population}</p>
                            <p>Region : {findCountry[0].region}</p>
                            <p>Sub Region : {findCountry[0].subregion}</p>
                            <p>capital: {findCountry[0].capital}</p>
                        </div>

                        <div className="rightPart">
                            <p>Top Level Domain : {findCountry[0].tld[0]}</p>
                            <p>Currencies : {findCountry[0].currencies == undefined ? ('') :
                                (Object.keys(findCountry[0].currencies)[0])}</p>
                            <p>Languages: {Object.values(findCountry[0].languages).join(',')
                            }</p>
                        </div>
                    </div>

                    <div className="borderCountries">
                        Border Countries :{findCountry[0].borders == undefined ? ('') : (findCountry[0].borders.map((country, index) => {
                            return <Link key={index} to={`/country/${country}`}>
                                <button className='ChangeButton'>{country}</button>
                            </Link>
                        }))}

                    </div>
                </div>
            </div>
        </div>

    )
}
