import Weather from '../models/Weather.mjs';

export const getWeather = async (req, res) => {
  try {
     const weatherData = await Weather.find().sort({ timestamp: -1 });
      res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};