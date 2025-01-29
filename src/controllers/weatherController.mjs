import Weather from '../models/Weather.mjs';
import City from '../models/city.mjs';

export const getWeather = async (req, res) => {
  try {
    const validCities = await City.distinct('name');

   
    const latestWeatherData = await Weather.aggregate([
      {
        $match: { city: { $in: validCities } }
      },
      {
        $sort: { timestamp: -1 }
      },
      {
        $group: {
          _id: "$city",
          latestWeather: { $first: "$$ROOT" } 
        }
      },
      {
        $replaceRoot: { newRoot: "$latestWeather" }
      }
    ]);

    res.json(latestWeatherData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};