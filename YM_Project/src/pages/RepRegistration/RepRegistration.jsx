import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./RepRegistration.css";

const RepRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nic: "",
        contact: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="rep-registration">
            {/* <TopBar />
            <SideBar /> */}
            <div className="baseCont">
                <div className="hRow">
                    <h3 className="text-4xl font-serif font-medium">Rep Registration</h3>
                </div>
                <div className="hLine"></div>
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Address" required />
                    </div>
                    <div className="form-group">
                        <label>NIC</label>
                        <input type="text" name="nic" value={formData.nic} onChange={handleChange} placeholder="Enter NIC" required />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter Contact Number" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" required />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RepRegistration;
