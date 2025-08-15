import { Express } from 'express';
import { twiml } from 'twilio';
import { config } from '../config/environment'; // Adjust the import path as needed

export function setupRoutes(app: Express) {
  // Twilio webhook endpoint
  app.post('/incoming-call', (req, res) => {
    console.log('📞 Incoming call from Twilio');

    const ngrokUrl = process.env.NGROK_URL || ''; // Get from .env

    if (!ngrokUrl) {
      console.error('❌ Missing NGROK_URL in environment variables');
      return res.status(500).send('Server configuration error');
    }

    const response = new twiml.VoiceResponse();

    response.say({ voice: 'alice' }, 'Welcome to patient Registration.');
    response.pause({ length: 1 });
    response.say({ voice: 'alice' }, 'Wait a second we are connecting you.');
    response.connect().stream({
      url: `${ngrokUrl}/media-stream`,
    });

    res.type('text/xml');
    console.log('Twiml response:', response.toString());
    res.send(response.toString());
  });

  // Status endpoint
  app.get('/', (req, res) => {
    res.send('<h1>Patient Realtime Agent</h1>');
  });
}
