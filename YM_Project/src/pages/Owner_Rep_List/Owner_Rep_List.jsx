import React from "react";
import "./Owner_Rep_List.css";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

const owner_rep_list = [
  {
    shop: "Shop A",
    date: "2025/03/10",
    rep_name: "Hasitha",
  },
  {
    shop: "Shop B",
    date: "2025/03/11",
    rep_name: "Ravindu",
  },
];

const Owner_Rep_List = () => {
  return (
    <div className="full">
      <Sidebar />
      <TopBar />
      
      <div className="content">
        <h2>All Orders</h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <button className="add">Add New</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Shop</th>
            <th>Date</th>
            <th>Rep Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {owner_rep_list.map((owner_rep_list, index) => (
            <tr key={index}>
              <td>{owner_rep_list.shop}</td>
              <td>{owner_rep_list.date}</td>
              <td>{owner_rep_list.rep_name}</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
                <button className="accept-btn">Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Owner_Rep_List;
