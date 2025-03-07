import React from "react";
import "./Rep_List.css";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

const representatives = [
  {
    name: "Rashen",
    email: "rashen@123",
    contact: "0761236548",
    nic: "20002545632",
  },
  {
    name: "Rashen",
    email: "rashen@123",
    contact: "0761236548",
    nic: "20002545632",
  },
  {
    name: "Rashen",
    email: "rashen@123",
    contact: "0761236548",
    nic: "20002545632",
  },
  {
    name: "Rashen",
    email: "rashen@123",
    contact: "0761236548",
    nic: "20002545632",
  },
];

const Rep_List = () => {
  return (
    <div className="rep-container">
        <Sidebar/>
        <TopBar/>
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
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>40</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Rep_List;
