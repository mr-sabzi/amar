import { useLocation } from "react-router-dom";
import Icon from "../Icons/Icon";
import "../Styles/Header.css";

function Header() {
  const location = useLocation();

  const pathNameToTitle = {
    "/": "Dashboard",
    "/tables": "Tables",
    "/billing": "Billing",
    "/RTL": "RTL",
    "/Profile": "Profile",
  };

  const pageTitle = pathNameToTitle[location.pathname];

  return (
    <div
      className={location.pathname === "/Profile" ? "Headerprofileactiv" : ""}
    >
      <div className="Header">
        <div className="Header-div1">
          <ul
            className={
              location.pathname === "/Profile"
                ? "Header-ulL-profile"
                : "Header-ulL"
            }
          >
            <li>
              <span
                className={
                  location.pathname === "/Profile"
                    ? "Headerprofileactivmtn"
                    : "Header-ulL-li1"
                }
              >
                Pages
              </span>
            </li>
            <li>
              <span
                className={
                  location.pathname === "/Profile"
                    ? "Headerprofileactivmtn"
                    : ""
                }
              >
                {" "}
                <div className={location.pathname === "/" ? "dashActive" : ""}>
                  /{" "}
                </div>
              </span>
            </li>
            <li>
              <span
                className={
                  location.pathname === "/Profile"
                    ? "Headerprofileactivmtn"
                    : "header-colormtn"
                }
              >
                <div className={location.pathname === "/" ? "dashActive" : ""}>
                  {pageTitle}
                </div>
              </span>
            </li>
          </ul>
          <p
            className={
              location.pathname === "/Profile"
                ? "Headerprofileactivmtn bold"
                : "header-colormtn bold"
            }
          >
            {pageTitle}
          </p>
        </div>

        <div className={"/Profile" ? "Header-DL-profile" : "Header-DL"}>
          <div className="Header-DL-inpts">
            <button className="Header-DL-inpts-search">
              <Icon name="search" />
            </button>
            <input
              type="text"
              className="Header-DL-inpts-inp"
              placeholder="Type here..."
            />
          </div>

          <div className="Header-DL-Sign">
            <span className="curser">
              <Icon
                name={
                  location.pathname === "/Profile"
                    ? "profileSign2"
                    : "profileSign"
                }
              />
            </span>
            <a
              href="/SignIn"
              className={
                location.pathname === "/Profile"
                  ? "Headerprofileactivmtnsign"
                  : "sign-a"
              }
            >
              Sign in
            </a>
          </div>

          <span className="curser">
            <Icon
              name={location.pathname === "/Profile" ? "settings2" : "settings"}
            />
          </span>
          <span className="curser">
            <Icon
              name={location.pathname === "/Profile" ? "alarm2" : "alarm"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
