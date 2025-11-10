import { useState, useEffect, useRef } from 'react';
import { weatherData } from "../data";

function CityForecast({ city, setCity }) {
    //state to hold the fetched weather data
    const [forecast, setForecast] = useState(null);
    //state for tracking loading status
    const [isLoading, setIsLoading] = useState(false);
    //ref to reference the details section for scrolling
    const detailsRef = useRef(null);

    //useEffect runs when 'city' changes
    useEffect(() => {
        //only fetch if a city is selected
        if (!city) {
            setForecast(null);
            return;
        }

        //set loading state to true
        setIsLoading(true);

        //simulate an API call with setTimeout
        const fetchWeather = setTimeout(() => {
            //check if the city exists in our data
            if (weatherData[city]) {
                setForecast(weatherData[city]);
            } else {
                setForecast(null);
            }
            setIsLoading(false);
        }, 500); //500ms delay to simulate network request

        //cleanup function runs when component unmounts or city changes
        return () => {
            clearTimeout(fetchWeather);
        };
    }, [city]); //dependency array - effect runs when city changes

    //function to scroll to details section
    const scrollToDetails = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    //don't render anything if no city is selected
    if (!city) {
        return null;
    }

    //show loading state
    if (isLoading) {
        return <p>Loading weather data for {city}...</p>;
    }

    //handle case where city data doesn't exist
    if (!forecast) {
        return <p>Weather data for {city} not found.</p>;
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Weather for {city.replace(/([A-Z])/g, ' $1').trim()}</h2>
            <button 
                onClick={() => setCity && setCity(null)}
                style={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    marginBottom: '10px'
                }}
>
            ← Back to City List
            </button>
            <div>
                <h3>Summary</h3>
                <p>{forecast.summary}</p>
            </div>

            <button 
                onClick={scrollToDetails}
                style={{
                    margin: '10px 0',
                    padding: '8px 16px',
                    cursor: 'pointer'
                }}
            >
                View Details
            </button>

            <div 
                ref={detailsRef}
                style={{
                    marginTop: '40px',
                    padding: '15px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '5px'
                }}
            >
                <h3>Detailed Forecast</h3>
                <p>{forecast.details}</p>
            </div>
        </div>
    );
}

export default CityForecast;