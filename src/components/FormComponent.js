import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    dateTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submit logic here, such as sending the data to a server or displaying it in an alert.
    console.log("Form data:", formData);
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
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <button type="submit" style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
