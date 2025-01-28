import axios from 'axios';
import 'dotenv/config';

export const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    const { main, weather } = response.data;

    
    return {
      city,
      temperature: main.temp,
      condition: weather[0].main
    };
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error.message);
    return null;
  }
};

export const checkAlerts = (weatherData) => {
  const { city, temperature, condition } = weatherData;
  const alerts = [];

  if (condition.toLowerCase().includes('rain')) {
    alerts.push({ city, alertType: 'Rain', });
  }
  if (temperature > 30) {
    alerts.push({ city, alertType: 'High Temperature' , temperature});
  }
  if (temperature < 10) {
    alerts.push({ city, alertType: 'Low Temperature', temperature });
  }

  return alerts;
};
