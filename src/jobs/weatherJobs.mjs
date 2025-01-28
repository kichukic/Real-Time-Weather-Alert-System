import cron from 'node-cron';
import { fetchWeatherData, checkAlerts } from '../services/weatherServices.mjs';
import { getCities } from '../services/cityService.mjs';
import Weather from '../models/Weather.mjs';
import Alert from '../models/Alert.mjs';

const runWeatherJob = () => {
  cron.schedule('*/1 * * * *', async () => {
    console.log('Fetching weather data...');
    const cities = await getCities(); 
    for (const city of cities) {
      const weatherData = await fetchWeatherData(city);
      if (weatherData) {
        await Weather.create(weatherData);
        const alerts = checkAlerts(weatherData);
        if (alerts.length > 0) {
          await Alert.insertMany(alerts);
          alerts.forEach(alert => {
            if(alert.alertType.includes('Rain')) {
              console.log(`Alert: ${alert.alertType} detected in ${alert.city} at ${new Date()}`);
            }else{
              console.log(`Alert: ${alert.alertType} detected in ${alert.city} at ${new Date()} with temperature of ${alert.temperature}°C`);
            }
          });
        }
      }
    }
  });
};

export default runWeatherJob;