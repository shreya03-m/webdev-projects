import { IoIosSearch } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Hourlyforecast from "./Hourlyforecast";
import axios from "axios";
import { useState } from "react";

const Searchbox = () => {

 const [weatherData,setweatherData]=useState(null);


 const api_key= "33d39f1ac3564bd684065732252009"
 const api_url="https://api.weatherapi.com/v1/forecast.json";
 const [city,setCity]=useState('');
 const[error, setError]=useState("")

  const fetchData = async() => {
    try {
    const response =await axios.get(`${api_url}?key=${api_key}&q=${city}&days=1`);
    console.log(response.data);
    setweatherData(response.data);
    setError('');
    } 
    catch (error) {
    setError("There was an error or city not found.");
    setweatherData(null);
    }
  };


  const handlekeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-gray-50 shadow-lg p-4 w-100 border-1">
        <div className="flex items-center gap-12 border-1 rounded ">
          <FaMapMarkerAlt className="w-10 h-6 text-blue-900 " />

          {/* input box */}
          <input
            className="p-2 bg-gray-100 placeholder-slate-600 outline-none "
            type="text"
            placeholder="Enter City Name"
            onKeyUp={handlekeyPress}
            onChange={e=>setCity(e.target.value)}
            value={city}
          />
        
          <button>
            <IoIosSearch className="w-10 h-10 p-1 bg-blue-800 text-amber-50 rounded hover:bg-blue-900" />
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Weather Data */}
        {weatherData && (
         <div className="flex-col justify-center items-center">
          <p className="text-center font-semibold font- text-xl mt-6">{weatherData.location.name} </p>
          <img src={weatherData.current.condition.icon} className="w-20 h-20 mx-auto mt-2 border rounded" />

          <p className="text-center font-sans mt-2">{weatherData.current.temp_c}°C</p>

          <p className="text-center font-sans text-md mt-2 bg-blue-200 rounded-full border w-50 mx-auto">{weatherData.current.condition.text}</p>

          <Hourlyforecast hourlyData={weatherData.forecast.forecastday[0].hour}/>
        </div>
        )}
      
      </div>
    </div>
  );
};

export default Searchbox;
