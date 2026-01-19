import { FaBars, FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import "../styles/header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="app-header">
      {/* Left */}
      <div className="header-left">
        <button className="hamburger-btn" onClick={onToggleSidebar}>
          <FaBars />
        </button>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right */}
      <div className="header-right">
        <FaBell className="header-icon" />
        <FaCog className="header-icon" />
        <div className="profile">
          <FaUserCircle />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
