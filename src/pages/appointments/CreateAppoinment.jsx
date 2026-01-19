import { useState } from "react";
import { FaUserPlus, FaList } from "react-icons/fa";
import "../../styles/form.css";
import AppointmentList from "./AppointmentList";

const CreateAppointment = () => {
  const [activeView, setActiveView] = useState("add");

  return (
    <div className="page-container">
      {/* Top Header */}
      {/* TOP HEADER – ADD PATIENT */}
{activeView === "add" && (
  <div className="page-top-bar">
    <h3>Create Appointment</h3>

    <div className="page-actions">
      <button
        className="btn btn-success"
        onClick={() => setActiveView("add")}
      >
        <FaUserPlus /> Add Patient
      </button>

      <button
        className="btn btn-outline-light"
        onClick={() => setActiveView("list")}
      >
        <FaList /> Appointment List
      </button>
    </div>
  </div>
)}

{/* TOP HEADER – APPOINTMENT LIST */}
{activeView === "list" && (
  <div className="page-top-bar">
  <h3>
    {activeView === "add" ? "Create Appointment" : "Appointment List"}
  </h3>

  <div className="page-actions">
    <button
      className={`btn page-btn ${
        activeView === "add" ? "active-btn" : ""
      }`}
      onClick={() => setActiveView("add")}
    >
      <FaUserPlus /> Add Patient
    </button>

    <button
      className={`btn page-btn ${
        activeView === "list" ? "active-btn" : ""
      }`}
      onClick={() => setActiveView("list")}
    >
      <FaList /> Appointment List
    </button>
  </div>
</div>

)}


      {/* ADD PATIENT FORM */}
      {activeView === "add" && (
        <div className="form-card">
          <div className="form-title">
            <h5>Appointment Details</h5>
            <p>Patient Details</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <label>Select Patient *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search Patient Name"
              />
            </div>

            <div className="col-md-6">
              <label>Select Doctor *</label>
              <select className="form-select">
                <option>Select Doctor</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Patient City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
              />
            </div>

            <div className="col-md-6">
              <label>Patient Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
              />
            </div>

            <div className="col-md-6">
              <label>Appointment Date *</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-6">
              <label>Appointment Time *</label>
              <input type="time" className="form-control" />
            </div>

            <div className="col-12">
              <label>Reason Of Visit *</label>
              <textarea
                rows="3"
                className="form-control"
                placeholder="Reason Of Visit"
              ></textarea>
            </div>
          </div>
        </div>
      )}

      {/* APPOINTMENT LIST */}
      {activeView === "list" && <AppointmentList />}
    </div>
  );
};

export default CreateAppointment;
