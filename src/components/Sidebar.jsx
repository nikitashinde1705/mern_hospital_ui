



import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserCog,
  FaHospitalUser,
  FaCalendarCheck,
  FaFlask,
  FaBoxes,
  FaFileInvoice,
  FaChartBar,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";

import logo from "../assets/icons/logo.svg";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [openUserRole, setOpenUserRole] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/" className="menu-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        {/* USER ROLE */}
        <div className="menu-section">USER ROLE</div>

       {/* USER ROLE */}
<div className="menu-section">USER ROLE</div>

<div
  className="user-role-wrapper"
  onMouseEnter={() => setOpenUserRole(true)}
  onMouseLeave={() => setOpenUserRole(false)}
>
  <div
    className={`menu-item ${openUserRole ? "active" : ""}`}
    onClick={() => setOpenUserRole(!openUserRole)}
    style={{ cursor: "pointer" }}
  >
    <FaUserCog />
    <span>User Role</span>
    <FaChevronDown style={{ marginLeft: "auto", fontSize: "12px" }} />
  </div>

  {openUserRole && (
    <div className="submenu">
      <NavLink to="/roles/create" className="submenu-item">
        Add User Role
      </NavLink>

      <NavLink to="/roles" className="submenu-item">
        User Role List
      </NavLink>

      <NavLink to="/users/create" className="submenu-item">
        Create User
      </NavLink>
    </div>
  )}
</div>


        {/* PATIENT */}
        <div className="menu-section">PATIENT</div>
        <NavLink to="/patients" className="menu-item">
          <FaHospitalUser />
          <span>Patient</span>
        </NavLink>

        {/* APPOINTMENTS */}
        <div className="menu-section">APPOINTMENTS</div>
        <NavLink to="/appointments" className="menu-item">
          <FaCalendarCheck />
          <span>Appointments</span>
        </NavLink>

        {/* LAB MODULE */}
        <div className="menu-section">LAB MODULE</div>
        <NavLink to="/lab" className="menu-item">
          <FaFlask />
          <span>Lab Module</span>
        </NavLink>

        {/* INVENTORY */}
        <div className="menu-section">INVENTORY</div>
        <NavLink to="/inventory" className="menu-item">
          <FaBoxes />
          <span>Inventory</span>
        </NavLink>

        {/* BILLING */}
        <div className="menu-section">BILLING</div>
        <NavLink to="/billing" className="menu-item">
          <FaFileInvoice />
          <span>Billing</span>
        </NavLink>

        {/* REPORTS */}
        <div className="menu-section">REPORTS</div>
        <NavLink to="/reports" className="menu-item">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
