import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import SubscribeOne from "../components/SubscribeOne";
import Preloader from "../helper/Preloader";

const Appointment = () => {
  let [active, setActive] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    vehicleMakeModel: '',
    licensePlate: '',
    serviceType: '',
    dateTime: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Başvurunuz alındı, takvime eklendi!');
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          vehicleMakeModel: '',
          licensePlate: '',
          serviceType: '',
          dateTime: '',
          additionalNotes: '',
        });
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    } catch (err) {
      console.error(err);
      alert('Sunucuya bağlanırken bir hata oluştu.');
    }
  };

  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Appointment"} />
      <form onSubmit={handleSubmit} style={{ width: '400px', margin: '0 auto' }}>
        <h2>Randevu Formu</h2>

        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Vehicle Make and Model:</label>
        <input
          type="text"
          name="vehicleMakeModel"
          value={formData.vehicleMakeModel}
          onChange={handleChange}
          required
        />

        <label>License Plate Number:</label>
        <input
          type="text"
          name="licensePlate"
          value={formData.licensePlate}
          onChange={handleChange}
        />

        <label>Preferred Service Type:</label>
        <input
          type="text"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
        />

        <label>Preferred Date and Time:</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />

        <label>Additional Notes:</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
        />

        <button type="submit">Gönder</button>
      </form>

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default Appointment;
