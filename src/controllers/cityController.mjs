import { getCities, addCity, removeCity } from '../services/cityService.mjs';

export const getCitiesList = async (req, res) => {
  try {
    const cities = await getCities();
    res.json({ cities });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities' });
  }
};

export const addCityToList = async (req, res) => {
  const { city } = req.body;
  if (!city) {
    return res.status(400).json({ message: 'City name is required.' });
  }
  try {
    await addCity(city);
    res.status(201).json({ message: `${city} added to the list.` });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: `${city} is already in the list.` });
    } else {
      res.status(500).json({ message: 'Error adding city' });
    }
  }
};

export const deleteCityFromList = async (req, res) => {
  const { city } = req.params;
  try {
    const isRemoved = await removeCity(city);
    if (isRemoved) {
      res.json({ message: `${city} removed from the list.` });
    } else {
      res.status(404).json({ message: `${city} not found in the list.` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing city' });
  }
};