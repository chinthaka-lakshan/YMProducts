import React, { useState, useEffect } from "react";
import "./EditRep.css";

const EditRep = ({ selectedRep, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nic: "",
    contact: "",
    password: "",
  });

  useEffect(() => {
    if (selectedRep) {
      setFormData({
        name: selectedRep.name,
        email: selectedRep.email,
        nic: selectedRep.nic,
        contact: selectedRep.contact,
        password: "",
      });
    }
  }, [selectedRep]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-rep-overlay">
      <div className="edit-rep-box">
        <h2>Edit Representative</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} disabled />

          <label>NIC</label>
          <input type="text" name="nic" value={formData.nic} disabled />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Contact Number</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />

          <div className="edit-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="button" className="save-btn" onClick={() => onSave(formData)}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRep;
