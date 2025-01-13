import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    fullName,
    phoneNumber,
    email,
    vehicleModel,
    licensePlate,
    serviceType,
    appointmentDateTime,
    notes
  } = req.body;

  // Validate required fields
  if (!fullName || !phoneNumber || !email || !vehicleModel || !licensePlate || !serviceType || !appointmentDateTime) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Make.com webhook URL from environment variable
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error('Webhook URL not configured');
    }

    // Send to Make.com
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        phoneNumber,
        email,
        vehicleModel,
        licensePlate,
        serviceType,
        appointmentDateTime,
        notes: notes || '',
        submittedAt: new Date().toISOString()
      })
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(responseData?.message || 'Error submitting to webhook');
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Appointment scheduled successfully'
    });

  } catch (error) {
    console.error('Appointment submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to schedule appointment',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}
