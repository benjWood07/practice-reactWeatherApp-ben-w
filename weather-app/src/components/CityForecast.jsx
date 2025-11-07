import {weatherData} from "./data"

function CityForecast ({city})
{
    if (!weatherData || !weatherData[city]) 
    {
        return <p>Weather data for {city} not found.</p>;
    }

    return (
        <div>
            <h2>{city}</h2>
            
            <p>Summary: {weatherData[city].summary}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <p>Detail: {weatherData[city].details}</p>
        </div>
    )
}
/*
        <p>{weatherData[{city}].summary}</p>
*/

export default CityForecast;