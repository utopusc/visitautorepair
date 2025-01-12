// pages/api/create-event.js

import { google } from 'googleapis';

// Örnek: Service Account bilgileri environment variable veya bir secret olarak saklanır
// ya da bir credentials JSON’unu parse edebilirsiniz.
// Bu örnekte basit tutuyoruz:
const serviceAccountEmail = process.env.SERVICE_ACCOUNT_CLIENT_EMAIL;
const serviceAccountPrivateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const eventData = req.body;
      // 1) Google Auth oluştur
      const jwtClient = new google.auth.JWT(
        serviceAccountEmail,
        null,
        serviceAccountPrivateKey.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/calendar']
      );

      await jwtClient.authorize();

      // 2) Calendar servisini hazırla
      const calendar = google.calendar({ version: 'v3', auth: jwtClient });

      // 3) Takvim event objesi
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
          dateTime: eventData.dateTime,
          timeZone: 'Europe/Istanbul',
        },
        end: {
          dateTime: new Date(new Date(eventData.dateTime).getTime() + 60 * 60 * 1000),
          timeZone: 'Europe/Istanbul',
        },
      };

      // 4) Event’i takvime ekle
      const response = await calendar.events.insert({
        calendarId: 'primary', // veya takvim ID’niz
        resource: event,
      });

      return res.status(200).json({ success: true, eventId: response.data.id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Event oluşturulurken hata oluştu.' });
    }
  } else {
    // Yalnızca POST kabul edelim:
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
