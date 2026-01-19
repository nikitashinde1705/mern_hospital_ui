import { useState } from "react";
import { FaEye, FaEdit } from "react-icons/fa";
import UserList from "./UserList";

import "../../styles/table.css";

const RoleList = () => {
  const [activeTab, setActiveTab] = useState("roles"); // roles | users

  return (
    <div className="page-container">
      {/* Top Heading */}
      <div className="page-top-bar">
        <h3>User & Role Management</h3>
      </div>

      {/* Tabs */}
      <div className="tab-bar">
        <button
          className={`tab-btn ${activeTab === "roles" ? "active" : ""}`}
          onClick={() => setActiveTab("roles")}
        >
          List of Roles
        </button>

        <button
          className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
          onClick={() => setActiveTab("users")}
        >
          List of Users
        </button>
      </div>

      {/* LIST OF ROLES */}
      {activeTab === "roles" && (
        <div className="section-wrapper">
          {/* <span className="section-indicator"></span> */}

          <div className="table-card">
            <div className="table-responsive-wrapper">
                <table className="table appointment-table role-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role Name</th>
                  <th>Role Code</th>
                  <th>Status</th>
                  <th>Patient Mgmt</th>
                  <th>Lab Module</th>
                  <th>Billing</th>
                  <th>User Mgmt</th>
                  <th>Appointments</th>
                  <th>Inventory</th>
                  <th>Reports</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  "SuperAdmin",
                  "Doctor",
                  "Lab Technician",
                  "Inventory Staff",
                  "Accountant",
                  "Clinic Admin",
                  "Receptionist",
                ].map((role, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{role}</td>
                    <td>-</td>
                    <td>
                      <span className="status-badge">Active</span>
                    </td>
                    <td>Yes</td>
                    <td>{index % 2 === 0 ? "Yes" : "No"}</td>
                    <td>{index % 3 === 0 ? "Yes" : "No"}</td>
                    <td>{index % 2 === 0 ? "Yes" : "No"}</td>
                    <td>{index % 2 === 0 ? "Yes" : "No"}</td>
                    <td>{index % 3 === 0 ? "Yes" : "No"}</td>
                    <td>{index % 2 === 0 ? "Yes" : "No"}</td>
                    <td className="actions">
                      <button className="icon-btn view">
                        <FaEye />
                      </button>
                      <button className="icon-btn edit">
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

            

            {/* Footer */}
            <div className="table-footer">
              <span>Showing 7 roles</span>

              <div className="pagination">
                <span>Items per page:</span>
                <select>
                  <option>10</option>
                </select>
                <span>1 - 7 of 7</span>
                <button disabled>{"<<"}</button>
                <button disabled>{"<"}</button>
                <button disabled>{">"}</button>
                <button disabled>{">>"}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIST OF USERS */}
      {activeTab === "users" && <UserList />}

    </div>
  );
};

export default RoleList;
