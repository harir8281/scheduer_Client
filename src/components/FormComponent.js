import React, { useState } from "react";
import axios from "axios";

function FormComponent() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    dateTime: "",
    event: "test_event25",
    purpose: "register",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = "http://localhost:5002/test";

      const updatedFormData = {
        email: formData.email,
        message: formData.message,
        time: formData.dateTime,
        event: formData.email.split("@")[0],
        purpose: formData.purpose,
      };

      console.log(updatedFormData);
      await axios.post(apiUrl, updatedFormData);

      console.log("Form data sent successfully!");
      window.location.reload();
      setFormData({
        email: "",
        message: "",
        dateTime: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Date & Time:</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
