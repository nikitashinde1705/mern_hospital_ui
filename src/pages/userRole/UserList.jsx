import { FaEye, FaEdit } from "react-icons/fa";
import "../../styles/table.css";

const UserList = () => {
  return (
    <div className="section-wrapper">
      {/* <span className="section-indicator"></span> */}

      <div className="table-card">
        <div className="table-responsive-wrapper">
            <table className="table appointment-table user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Status</th>
              <th>Franchise</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>SuperAdmin</td>
              <td>system@admin123</td>
              <td>-</td>
              <td>SuperAdmin</td>
              <td>
                <span className="status-badge">Active</span>
              </td>
              <td>1001</td>
              <td className="actions">
                <button className="icon-btn view">
                  <FaEye />
                </button>
                <button className="icon-btn edit">
                  <FaEdit />
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Dr. Meenal Prakash Joshi</td>
              <td>meenal@gmail.com</td>
              <td>7785469857</td>
              <td>Clinic Admin</td>
              <td>
                <span className="status-badge">Active</span>
              </td>
              <td>1002</td>
              <td className="actions">
                <button className="icon-btn view">
                  <FaEye />
                </button>
                <button className="icon-btn edit">
                  <FaEdit />
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Komal Sunil Ghadge</td>
              <td>komal@gmail.com</td>
              <td>9958741256</td>
              <td>Receptionist</td>
              <td>
                <span className="status-badge">Active</span>
              </td>
              <td>1002</td>
              <td className="actions">
                <button className="icon-btn view">
                  <FaEye />
                </button>
                <button className="icon-btn edit">
                  <FaEdit />
                </button>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Sagar Vijay Pawar</td>
              <td>sagar@gmail.com</td>
              <td>8845745895</td>
              <td>Doctor</td>
              <td>
                <span className="status-badge">Active</span>
              </td>
              <td>1002</td>
              <td className="actions">
                <button className="icon-btn view">
                  <FaEye />
                </button>
                <button className="icon-btn edit">
                  <FaEdit />
                </button>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Satish Kale</td>
              <td>satish@gmail.com</td>
              <td>9478569584</td>
              <td>Lab Technician</td>
              <td>
                <span className="status-badge">Active</span>
              </td>
              <td>1002</td>
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
        </div>
        

        {/* Footer */}
        <div className="table-footer">
          <span>Showing 5 users</span>

          <div className="pagination">
            <span>Items per page:</span>
            <select>
              <option>10</option>
            </select>
            <span>1 - 5 of 5</span>
            <button disabled>{"<<"}</button>
            <button disabled>{"<"}</button>
            <button disabled>{">"}</button>
            <button disabled>{">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
