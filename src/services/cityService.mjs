import City from '../models/city.mjs';

// Fetch all cities from the database
export const getCities = async () => {
  const cities = await City.find({});
  return cities.map(city => city.name);
};

// Add a new city to the database
export const addCity = async (cityName) => {
  const city = new City({ name: cityName });
  await city.save();
  return city;
};

// Remove a city from the database
export const removeCity = async (cityName) => {
  const result = await City.deleteOne({ name: cityName });
  return result.deletedCount > 0;
};