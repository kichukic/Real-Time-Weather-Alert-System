import City from '../models/city.mjs';


export const getCities = async () => {
  const cities = await City.find({});
  return cities.map(city => city.name);
};


export const addCity = async (cityName) => {
  const city = new City({ name: cityName });
  await city.save();
  return city;
};


export const removeCity = async (cityName) => {
  const result = await City.deleteOne({ name: cityName });
  return result.deletedCount > 0;
};