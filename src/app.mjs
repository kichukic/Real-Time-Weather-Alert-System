import express from 'express';
import connectDB from './config/db.mjs';
import routes from './routes/index.mjs';
import runWeatherJob from './jobs/weatherJobs.mjs';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use('/', routes);


connectDB();

runWeatherJob();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});