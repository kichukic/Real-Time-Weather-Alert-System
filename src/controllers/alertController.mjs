import Alert from '../models/Alert.mjs';

export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ timestamp: -1 });
     res.json(alerts);
  } catch (error) {
     res.status(500).json({ message: 'Error fetching alerts' });
  }
};