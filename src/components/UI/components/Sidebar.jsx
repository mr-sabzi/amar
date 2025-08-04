import { Link } from "react-router-dom";
import "../../Styles/Sidebar.css";
import Icon from "../../Icons/Icon";
import { useState } from "react";

const ArrSide = [
  {
    id: "1",
    icon: "Dashboard",
    icon2: "Dashboard2",
    name: "Dashboard",
    to: "/",
  },
  {
    id: "2",
    icon: "Tables",
    icon2: "Tables2",
    name: "Tables",
    to: "/tables",
  },
  {
    id: "3",
    icon: "Billing",
    icon2: "Billing2",
    name: "Billing",
    to: "/billing",
  },
  { id: "rtl", icon: "RTL", icon2: "RTL2", name: "RTL", to: "/RTL" },
  {
    id: "4",
    icon: "Profile",
    icon2: "Profile2",
    name: "Profile",
    to: "/Profile",
  },
  {
    id: "5",
    icon: "SignIn",
    icon2: "SignIn2",
    name: "Sign In",
    to: "/SignIn",
  },
  {
    id: "6",
    icon: "SignUp",
    icon2: "SignUp2",
    name: "Sign Up",
    to: "/SignUp",
  },
];

const ArrSideSliceP1 = ArrSide.slice(0, 4);
const ArrSideSliceP2 = ArrSide.slice(4, 7);

const Sidebar = () => {
  const [green, setgreen] = useState("1");

  return (
    <div className="sidbarkol">
      <div className="sidbarkol-header">
        <span className="sidbarkol-header-icon">
          <Icon name="sidbar" />
        </span>
        <strong className="sidbarkol-header-matn">PURITY UI DASHBOARD</strong>
      </div>

      <ul className="sidbarkol-Main">
        {ArrSideSliceP1.map((item) => (
          <li key={item.id} className="sidbarkol-Main-lis">
            <Link to={item.to} className="Link">
              <div
                className={`sidbarkol-Main-lis-dlink ${
                  green === item.id ? "active" : ""
                }`}
                onClick={() => setgreen(item.id)}
              >
                <div className="sidbarkol-Main-lis-dicons">
                  <div
                    className={`sidbarkol-Main-lis-diconssss ${
                      green === item.id ? "green" : ""
                    }`}
                  >
                    <span className="sidbarkol-Main-lis-dicons-icons">
                      <Icon name={green === item.id ? item.icon2 : item.icon} />
                    </span>
                  </div>
                </div>
                <span className="sidbarkol-Main-lis-spans">{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="sidbarkol-Main">
        <p>ACCOUNT PAGES</p>
        {ArrSideSliceP2.map((item) => (
          <li key={item.id} className="sidbarkol-Main-lis">
            <a href={item.to} className="Link">
              <div
                className={`sidbarkol-Main-lis-dlink ${
                  green === item.id ? "active" : ""
                }`}
                onClick={() => setgreen(item.id)}
              >
                <div className="sidbarkol-Main-lis-dicons">
                  <div
                    className={`sidbarkol-Main-lis-diconssss ${
                      green === item.id ? "green" : ""
                    }`}
                  >
                    <span className="sidbarkol-Main-lis-dicons-icons">
                      <Icon name={green === item.id ? item.icon2 : item.icon} />
                    </span>
                  </div>
                </div>
                <span className="sidbarkol-Main-lis-spans">{item.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="Support">
        <div className="Support-center">
          <div className="Support-soal">
            <Icon name={"soal"} />
          </div>
          <div className="support-tb">
            <div className="support-tb-t">
              <strong>Need help?</strong>
              <p>please check our docs</p>
            </div>
            <button className="support-tb-b">DOCUMENTATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
