import { useState } from 'react'
import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'

function App() {

  const [city, setCity] = useState(null);

  return (
    <div>
      <h1>My React App</h1>
      <CityList city={city} setCity={setCity}/>
      <CityForecast city={city} setCity={setCity} />
    </div>
  );
}

export default App;