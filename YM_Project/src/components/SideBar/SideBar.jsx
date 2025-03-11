import React from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaStore,
  FaSignOutAlt,
} from "react-icons/fa";
import "./sidebar.css"; // Ensure CSS is implemented

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">YM Products</h2>
      <ul className="sidebar-menu">
        <li>
          <FaTachometerAlt className="menu-icon" />
          <span>Dashboard</span>
        </li>
        <li>
          <FaShoppingCart className="menu-icon" />
          <span>Orders</span>
        </li>
        <li>
          <FaShoppingCart className="menu-icon" />
          <span>Returns</span>
        </li>
        <li>
          <FaUsers className="menu-icon" />
          <span>Representatives</span>
        </li>
        <li>
          <FaChartLine className="menu-icon" />
          <span>Income Analysis</span>
        </li>
        <li>
          <FaStore className="menu-icon" />
          <span>Shops</span>
        </li>
        <li>
          <FaSignOutAlt className="menu-icon" />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
