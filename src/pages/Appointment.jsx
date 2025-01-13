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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    vehicleModel: '',
    licensePlate: '',
    serviceType: '',
    appointmentDateTime: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const appointmentDate = new Date(formData.appointmentDateTime);
      // Convert to SF timezone
      const sfTime = appointmentDate.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      });
      const sfDate = new Date(sfTime);
      
      const webhookData = {
        appointment_details: {
          date: sfDate.toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" }),
          time: sfDate.toLocaleTimeString("en-US", { 
            timeZone: "America/Los_Angeles",
            hour: '2-digit',
            minute: '2-digit',
            hour12: true 
          }),
          service_type: formData.serviceType,
          status: "pending",
          timezone: "PT (San Francisco)"
        },
        
        customer_info: {
          name: formData.fullName,
          phone: formData.phoneNumber,
          email: formData.email
        },
        
        vehicle_info: {
          model: formData.vehicleModel,
          plate: formData.licensePlate
        },
        
        notes: formData.notes || "No additional notes",
        
        metadata: {
          source: "website_form",
          submission_time: new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
          }),
          timezone: "America/Los_Angeles",
          form_version: "1.0"
        }
      };

      console.log('Sending webhook data:', webhookData);

      const response = await fetch('https://hook.us2.make.com/m9ry4ll3oy4uf4jw2jcf8g2e2knfygid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(webhookData)
      });
      
      console.log('Response:', response);

      // Since we're using no-cors, we won't get a JSON response
      // Instead, assume success if we get here
      alert('Appointment request submitted successfully!');
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        vehicleModel: '',
        licensePlate: '',
        serviceType: '',
        appointmentDateTime: '',
        notes: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting appointment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
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

      {/* Appointment Form */}
      <div className="appointment-form-area section-padding">
        <div className="container">
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" placeholder="Phone Number" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email Address" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} className="form-control" placeholder="Vehicle Make and Model" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" name="licensePlate" value={formData.licensePlate} onChange={handleChange} className="form-control" placeholder="License Plate Number" required />
              </div>
              <div className="col-md-6 mb-3">
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="form-control" required>
                  <option value="">Select Service Type</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="paint">Paint</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <input type="datetime-local" name="appointmentDateTime" value={formData.appointmentDateTime} onChange={handleChange} className="form-control" required />
              </div>
              <div className="col-12 mb-3">
                <textarea name="notes" value={formData.notes} onChange={handleChange} className="form-control" placeholder="Additional Notes (optional)" rows="4"></textarea>
              </div>
              <div className="col-12">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

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
