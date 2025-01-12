// pages/api/create-event.js

import { google } from 'googleapis';
import Cors from 'cors';

// CORS middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
});

// CORS middleware handler
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// Örnek: Service Account bilgileri environment variable veya bir secret olarak saklanır
// ya da bir credentials JSON’unu parse edebilirsiniz.
// Bu örnekte basit tutuyoruz:
const serviceAccountEmail = process.env.SERVICE_ACCOUNT_CLIENT_EMAIL;
const serviceAccountPrivateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY;

export default async function handler(req, res) {
  // CORS'u çalıştır
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const eventData = req.body;
    
    // Private key'i düzgün formata çevir
    const privateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n');
    
    const jwtClient = new google.auth.JWT(
      process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
      null,
      privateKey,
      ['https://www.googleapis.com/auth/calendar']
    );

    await jwtClient.authorize();

    const calendar = google.calendar({ version: 'v3', auth: jwtClient });

    // Event süresi kontrolü
    const startTime = new Date(eventData.dateTime);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const event = {
      summary: `Servis Talebi - ${eventData.fullName}`,
      description: `
        Ad Soyad: ${eventData.fullName}
        Telefon: ${eventData.phoneNumber}
        E-posta: ${eventData.email}
        Araç: ${eventData.vehicleMakeModel}
        Plaka: ${eventData.licensePlate}
        Servis Tipi: ${eventData.serviceType}
        Notlar: ${eventData.additionalNotes}
      `,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Europe/Istanbul',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Europe/Istanbul',
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    return res.status(200).json({ success: true, eventId: response.data.id });
  } catch (error) {
    console.error('Calendar API Error:', error);
    return res.status(500).json({ 
      error: 'Event oluşturulurken hata oluştu.',
      details: error.message 
    });
  }
}
