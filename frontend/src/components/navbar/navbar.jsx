import "./navbar.css";
import { Link } from "react-router";
import {
  HomeIcon,
  Landmark,
  User,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";

export default function Navbar({ landingpage = false, dashboardpage = false }) {
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
    <nav className="Sidebar_nav">
      <div className="Main_feature">
        <h2 className="Appname">Saving money</h2>
        <a href="/">
          <HomeIcon /> Dashboard
        </a>
        <a href="/transactions">
          <Landmark />
           Transactions
        </a>
        <a href="/statistics"><ChartNoAxesCombined/> Statistics</a>
      </div>
      <div className="User_perf">
        <a href="/reports">
          <User />
          Account
        </a>
        <a href="/settings">
          <Settings /> Settings
        </a>
      </div>
    </nav>
  );
};
