import React from "react";
import { useAppcontext } from "../Context/AppContext";

// Render:
// - Weather Details
// Props:
// - AppContext(value)

function WeatherInfo() {

    // Context Called:
    const AppContext = useAppcontext();
    const { error, temperature, city, country, cloudy, description, humidity, wind_speed } = AppContext.value;

    if (error) {
        return (
            <div className="w-full h-full">
                <p>{error}</p>
            </div>
        );
    }

    return (

        <div className="w-full h-full">
            {temperature ?
                <div className="w-full h-full text-lg sm:text-xl">

                    <h1 className="my-4 sm:mt-8">Weather Details</h1>

                    <div className="hidden sm:w-full sm:flex sm:justify-between sm:my-8">
                        <p className="text-gray-500 font-medium">Location</p>
                        <p>{city}, {country}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Cloudy</p>
                        <p>{cloudy}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Description</p>
                        <p>{description}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Humidity</p>
                        <p>{humidity}</p>
                    </div>

                    <div className="w-full flex justify-between">
                        <p className="text-gray-500 font-medium">Wind Speed</p>
                        <p>{wind_speed}</p>
                    </div>

                </div>
                :
                <div >
                    <h1 className="text-center sm:text-xl mt-4">No request yet</h1>
                </div>
            }

        </div>

    )

};

export { WeatherInfo };