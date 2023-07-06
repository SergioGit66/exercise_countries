import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesDetails = ({ countries, info }) => {
    
    const [CountryInfo, setCountryInfo] = useState([]);
    const [newCountryInfo, setNewCountryInfo] = useState([]);


    if (info.length !== 0 && info !== CountryInfo) {
        setCountryInfo(info);
        setNewCountryInfo([]);
    }

    function displayNewCountry(newClickedCountry) {
        setNewCountryInfo(newClickedCountry);
    }



    if (newCountryInfo.length !== 0) {
        console.log(newCountryInfo);
        return (
            <div id="info">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${newCountryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
                <h3></h3>
                <div className='data'>
                    <p>Capital</p>
                    <p></p>
                </div>
                <div>
                    <p>Area</p>
                    <p></p>
                </div>
                <div>
                    <p>Borders</p>
                    <ul>
                        <li>
                            {newCountryInfo.borders.map(country => countries.map(borderCountry => {

                                if (borderCountry.alpha3Code === country) {
                                    console.log(borderCountry);
                                    return (

                                        <p>
                                            <Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

                                        </p>
                                    )
                                }
                            }))}
                        </li>
                    </ul>
                </div>




            </div>
        )

    }
    else if (CountryInfo.length !== 0) {
        console.log(CountryInfo);
        return (
            <div id="info">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${CountryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
                <h3></h3>
                <div className='data'>
                    <p>Capital</p>
                    <p></p>
                </div>
                <div>
                    <p>Area</p>
                    <p></p>
                </div>
                <div>
                    <p>Borders</p>
                    <ul>
                        <li>
                            {CountryInfo.borders.map(country => countries.map(borderCountry => {

                                if (borderCountry.alpha3Code === country) {
                                    console.log(borderCountry);
                                    return (

                                        <p>
                                            <Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

                                        </p>
                                    )
                                }
                            }))}
                        </li>
                    </ul>
                </div>




            </div>
        )

    }
}
    ;

