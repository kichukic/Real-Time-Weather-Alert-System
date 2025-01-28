import express from 'express';
import { getWeather } from '../controllers/weatherController.mjs';
import { getAlerts } from '../controllers/alertController.mjs';
import { getCitiesList, addCityToList, deleteCityFromList } from '../controllers/cityController.mjs';

const router = express.Router();

router.get('/weather', getWeather);
router.get('/alerts', getAlerts);
router.get('/cities', getCitiesList);
router.post('/cities', addCityToList);
router.delete('/cities/:city', deleteCityFromList);
export default router;