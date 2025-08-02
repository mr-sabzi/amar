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
    "/SignIn": "Sign In",
    "/SignUp": "Sign Up",
  };

  const pageTitle = pathNameToTitle[location.pathname] || "Page";

  return (
    <>
      <div className={location.pathname === '/Profile' ? 'Headerprofileactiv' : ''}>
        <div className="Header">
          <div className="Header-div1">
            <ul className="Header-ulL">
              <li>
                <span className={location.pathname === '/Profile' ? 'Headerprofileactivmtn' : 'Header-ulL-li1'}>Pages</span>
              </li>
              <li>
                <span className={location.pathname === '/Profile' ? 'Headerprofileactivmtn' : 'header-colormtn'}>/</span>
              </li>
              <li>
                {" "}
                <span className={location.pathname === '/Profile' ? 'Headerprofileactivmtn' : 'header-colormtn'}>{pageTitle}</span>
              </li>
            </ul>
            <p className={location.pathname === '/Profile' ? 'Headerprofileactivmtn bold' : 'header-colormtn bold'}>{pageTitle}</p>
          </div>

          <div className="Header-DL">
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
                <Icon  name={location.pathname === '/Profile' ? 'profileSign2' : 'profileSign'}/>
              </span>
              <a href="#" className={location.pathname === '/Profile' ? 'Headerprofileactivmtn' : 'sign-a'}>
                Sign in
              </a>
            </div>

            <span className="curser">
              <Icon  name={location.pathname === '/Profile' ? 'settings2' : 'settings'}/>
            </span>
            <span className="curser">
              <Icon  name={location.pathname === '/Profile' ? 'alarm2' : 'alarm'}/>
            </span>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Header;
