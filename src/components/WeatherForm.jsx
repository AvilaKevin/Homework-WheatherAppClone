import React from "react";
import { useAppcontext } from "../Context/AppContext";

function WeatherForm() {

    // Cambio de mejora en la legibilidad de la instancia.
    const { getWeather } = useAppcontext();

    // Validación y envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // evita recargar la página

        // Extrae los valores del formulario
        const city = e.target.city.value.trim();
        const country = e.target.country.value.trim();

        // Valida campos vacíos
        if (!city || !country) {
            alert("Por favor, completa ambos campos (ciudad y país).");
            return;
        }

        getWeather(e);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col items-center border-b-2 border-b-gray-500">

                {/* City Input */}
                <div className="relative z-0 mb-3 sm:mb-12 w-4/6">
                    <input
                        type="text"
                        name="city"
                        autoFocus
                        placeholder=" "
                        className="block py-2.5 px-0 w-full text-lg sm:text-xl bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:border-b-gray-400 peer"
                    />
                    <label className="peer-focus:font-medium absolute text-lg sm:text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Your city name
                    </label>
                </div>

                {/* Country Input */}
                <div className="relative z-0 w-4/6">
                    <input
                        type="text"
                        name="country"
                        placeholder=" "
                        className="block py-2.5 px-0 w-full text-lg sm:text-xl bg-transparent border-0 border-b-2 border-b-gray-500 focus:outline-none focus:border-b-gray-400 peer"
                    />
                    <label className="peer-focus:font-medium absolute text-lg sm:text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Your country name
                    </label>
                </div>

                {/* Form Button */}
                <button
                    type="submit"
                    className="w-1/2 md:w-auto lg:w-1/2 py-1 sm:py-2 px-4 my-6 sm:my-14 bg-transparent text-white text-lg sm:text-xl sm:font-semibold border border-b-gray-400 hover:bg-opacity-70 hover:bg-gray-200 hover:border-transparent duration-300"
                >
                    Get Weather
                </button>
            </form>
        </div>
    );
};

export { WeatherForm };