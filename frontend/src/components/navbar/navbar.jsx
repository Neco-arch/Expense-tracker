import "./navbar.css";
import { Link } from "react-router";

export default function Navbar({
  landingpage = false,
  dashboardpage = false
}) {
  const token = window.localStorage.getItem("token");

  return (
    <>
      {landingpage && <Landingpagenav token={token} />}

      {dashboardpage && <Dashboardnav />}
    </>
  );
}

const Landingpagenav = ({ token }) => {
  return (
    <nav>
      <div className="Logo">
        <img alt="Logo" />
      </div>

      <div className="Navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="Action">
        <ul>
          {token === null ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const Dashboardnav = () => {
  return (
    <nav>
      <div className="Logo">
        <img alt="Logo" />
      </div>

      <div className="Navigation">
        <ul>
          <li>Overview</li>
          <li>Transactions</li>
          <li>Statistics</li>
        </ul>
      </div>

      <div className="Userprofile">
        <img alt="profile picture" />
      </div>
    </nav>
  );
};