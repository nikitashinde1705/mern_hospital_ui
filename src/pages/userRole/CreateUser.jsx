import "../../styles/form.css";

const CreateUser = () => {
  return (
    <div className="page-container">
      {/* Top Heading */}
      <div className="page-top-bar">
        <h3>User & Role Management</h3>
      </div>

      {/* Create User Card */}
      <div className="section-wrapper">
        {/* <span className="section-indicator"></span> */}

        <div className="form-card">
          {/* Title */}
          <div className="form-title">
            <h5>Create User</h5>
            <p>Create system users and assign roles</p>
          </div>

          {/* Form Fields */}
          <div className="row g-4">
            {/* Full Name */}
            <div className="col-12">
              <label>Full Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label>Email *</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            {/* Mobile */}
            <div className="col-md-6">
              <label>Mobile *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
              />
            </div>

            {/* Password */}
            <div className="col-md-6">
              <label>Password *</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            {/* Role */}
            <div className="col-md-6">
              <label>Role *</label>
              <select className="form-select">
                <option>Select Role</option>
                <option>SuperAdmin</option>
                <option>Doctor</option>
                <option>Receptionist</option>
              </select>
            </div>

            {/* Franchise */}
            <div className="col-md-6">
              <label>Select Franchise *</label>
              <select className="form-select">
                <option>Not Assigned</option>
                <option>1001</option>
                <option>1002</option>
              </select>
            </div>

            {/* Status */}
            <div className="col-md-6">
              <label>Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="form-actions">
            <button className="btn btn-outline-secondary">
              Save Draft
            </button>

            <button className="btn btn-success">
              👤 Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
