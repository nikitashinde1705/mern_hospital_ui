import { FaSearch, FaEye, FaEdit } from "react-icons/fa";
import "../../styles/table.css";

const AppointmentList = () => {
  return (
    <>
      {/* Search Section */}
      <div className="section-wrapper">
        {/* <span className="section-indicator"></span> */}

        <div className="search-section">
          <label>
            Search By Name or Mobile No or Patient ID or Date
          </label>

          <div className="search-box">
            <input
              type="text"
              className="form-control"
              placeholder="All Cities"
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label>Cities</label>
              <select className="form-select">
                <option>All Cities</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Medicines</label>
              <select className="form-select">
                <option>List Of Medicines</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="section-wrapper">
        {/* <span className="section-indicator"></span> */}

        <div className="table-card">
          <table className="table appointment-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Visit Reason</th>
                <th>Mobile no</th>
                <th>Last Visit</th>
                <th>Total Visits</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PT-1</td>
                <td>
                  Rajesh Kale <br />
                  <small>Pune</small>
                </td>
                <td>Health Check up Testing</td>
                <td>Sagar Vijay Pawar</td>
                <td>2026-01-10</td>
                <td>7</td>
                <td className="actions">
                  <button className="icon-btn view">
                    <FaEye />
                  </button>
                  <button className="icon-btn edit">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Footer */}
          <div className="table-footer">
            <span>Showing 1 entries</span>

            <div className="pagination">
              <span>Items per page:</span>
              <select>
                <option>5</option>
              </select>
              <span>1 - 1 of 1</span>
              <button disabled>{"<<"}</button>
              <button disabled>{"<"}</button>
              <button disabled>{">"}</button>
              <button disabled>{">>"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
