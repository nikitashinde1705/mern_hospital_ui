import "../../styles/form.css";

const CreateRole = () => {
  return (
    <div className="page-container">
      {/* Top Heading */}
      <div className="page-top-bar">
        <h3>User & Role Management</h3>
      </div>

      {/* Create Role Card */}
      <div className="section-wrapper">
        {/* <span className="section-indicator"></span> */}

        <div className="form-card">
          {/* Title */}
          <div className="form-title">
            <h5>Create Role</h5>
            <p>
              Define system roles and permissions. Roles are reusable across
              clinics.
            </p>
          </div>

          {/* Inputs */}
          <div className="row g-4">
            <div className="col-md-4">
              <label>Role Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Role Name"
              />
            </div>

            <div className="col-md-4">
              <label>Role Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Role Code"
              />
            </div>

            <div className="col-md-4">
              <label>Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Permissions */}
          <div className="permissions-box">
            <h6>Permissions</h6>

            <div className="permissions-grid">
              <label>
                <input type="checkbox" /> Patient Management
              </label>

              <label>
                <input type="checkbox" /> Lab Module
              </label>

              <label>
                <input type="checkbox" /> Billing
              </label>

              <label>
                <input type="checkbox" /> User Management
              </label>

              <label>
                <input type="checkbox" /> Appointments
              </label>

              <label>
                <input type="checkbox" /> Inventory
              </label>

              <label>
                <input type="checkbox" /> Reports
              </label>

              <label>
                <input type="checkbox" /> All
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button className="btn btn-outline-secondary">
              Save Draft
            </button>

            <button className="btn btn-success">
              ✔ Create Role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRole;
