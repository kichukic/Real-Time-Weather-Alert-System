import express from 'express';
import { getWeather } from '../controllers/weatherController.mjs';
import { getAlerts } from '../controllers/alertController.mjs';

const router = express.Router();

router.get('/weather', getWeather);
router.get('/alerts', getAlerts);

export default router;