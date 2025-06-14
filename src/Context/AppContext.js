import React, { createContext, useContext, useState } from 'react';
import Main from '../Icons/Main.jpg';
import Clouds from '../Icons/Clouds.jpg'
import Thunderstorm from '../Icons/Thunderstorm.jpg'
import Rain from '../Icons/Rain.jpg'
import Snow from '../Icons/Snow.jpg'
import Clear from '../Icons/Clear.jpg'
import AllWeathers from '../Icons/AllWeathers.jpg'

const AppContext = createContext();

export default function Store({ children }) {
    //STATES:
    // Store the wheather info:
    const [weatherData, setWeatherData] = useState({});//El nombre value era muy genérico. weatherData describe mejor el contenido del estado.
    // Store the Background:
    const [appBackground, setAppBackground] = useState(Main);
    // Store the Icon:
    const [weatherIcon, setWeatherIcon] = useState();

    // APPI KEY:
    const WHEATHER_KEY = process.env.REACT_APP_WHEATHER_KEY;

    //API CONSUMER:
    const getWeather = async (e) => {

        // Capture the form info:
        e.preventDefault();
        const city = e.target.elements.city?.value.trim();
        const country = e.target.elements.country?.value.trim();
        
        // Validate the form info:
        if (!city || !country) {
    setWeatherData({ error: "Please enter a city and a country" });
    return;//Evita que el usuario envíe espacios vacíos o que haya errores si el input no existe.
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WHEATHER_KEY}&units=metric`;
                try {
                 const response = await fetch(API_URL);
               const data = await response.json();

                if (response.ok) {
                // ... procesar datos
              } else {
            setWeatherData({ error: data.message || "Weather data not found." });
             }
             } catch (error) {
            setWeatherData({ error: "Something went wrong. Please try again later." });
           }//Protege tu app de fallos de red o respuestas inválidas de la API.


            setValue({
                temperature: Math.trunc(data.main.temp) + "°",
                description: data.weather[0].description,
                humidity: data.main.humidity + "%",
                wind_speed: Math.trunc(data.wind.speed) + "km/h",
                city: data.name,
                country: data.sys.country,
                cloudy: data.clouds.all + "%",
                error: null
            });


            // Dinamic Icon:
            const icon = data.weather[0].icon;
            const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`
            setWeatherIcon(urlIcon);


            // Dinamic Weather:
            const main = data.weather[0].main;
            switch (main) {
                case 'Thunderstorm':
                    setAppBackground(Thunderstorm);
                    break;
                case 'Drizzle':
                    setAppBackground(Rain);
                    break;
                case 'Rain':
                    setAppBackground(Rain);
                    break;
                case 'Snow':
                    setAppBackground(Snow);
                    break;
                case 'Clear':
                    setAppBackground(Clear);
                    break;
                case 'Clouds':
                    setAppBackground(Clouds);
                    break;
                default:
                    setAppBackground(AllWeathers);
            };

        } else {
            setValue({ error: 'Please enter a city and a country' })
        };

    };


    return (
        <AppContext.Provider
            value={{
                value,
                getWeather,
                appBackground,
                setAppBackground,
                weatherIcon
            }}
        >
            {children}
        </AppContext.Provider>
    );

};


export function useAppcontext() {
    return useContext(AppContext)
};