import React, { useState } from "react";
import "./Rep_List.css";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import EditRep from "../EditRep/EditRep";

const initialRepresentatives = [
  { name: "Rashen", email: "rashen@123", contact: "0761236548", nic: "20002545632" },
  { name: "Lakshan", email: "lakshan@123", contact: "0789876567", nic: "200107901192" },
  { name: "Yashoda", email: "yashoda@123", contact: "0789876567", nic: "200107901192" },
  { name: "Ravindu", email: "ravindu@123", contact: "0789876567", nic: "200107901192" },
];

const Rep_List = () => {
  const [representatives, setRepresentatives] = useState(initialRepresentatives);
  const [selectedRep, setSelectedRep] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (rep) => {
    setSelectedRep(rep);
    setShowEditModal(true);
  };

  const handleSave = (updatedRep) => {
    setRepresentatives((prev) =>
      prev.map((rep) => (rep.nic === updatedRep.nic ? updatedRep : rep))
    );
    setShowEditModal(false);
  };

  return (
    <div className="rep-container">
      <Sidebar />
      <TopBar />
      <h2>All Representatives</h2>
      <div className="rep-header">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <button className="add-new">Add New</button>
      </div>
      <table className="rep-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>NIC</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {representatives.map((rep, index) => (
            <tr key={index}>
              <td>{rep.name}</td>
              <td>{rep.email}</td>
              <td>{rep.contact}</td>
              <td>{rep.nic}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(rep)}>Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && selectedRep && (
        <EditRep
          selectedRep={selectedRep}
          onClose={() => setShowEditModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Rep_List;
