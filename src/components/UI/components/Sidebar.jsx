import { Link } from "react-router-dom";
import "../../Styles/Sidebar.css";
import Icon from "../../Icons/Icon";

const ArrSide = [
  {
    icon: "Dashboard",
    name: "Dashboard",
    to: "/",
  },
  {
    icon: "Tables",
    name: "Tables",
    to: "/tables",
  },
  {
    icon: "Billing",
    name: "Billing",
    to: "/billing",
  },
  {
    icon: "RTL",
    name: "RTL",
    to: "/RTL",
  },
];



const ArrSideSliceP=[
    {
    icon: "Profile",
    name: "Profile",
    to: "/Profile",
  },
  {
    icon: "Sign In",
    name: "Sign In",
    to: "/SignIn",
  },
  {
    icon: "Sign Up",
    name: "Sign Up",
    to: "/SignUp",
  },
]   

const Sidebar = () => {
  return (
    <div className="sidbarkol">
      <div className="sidbarkol-header">
        <span className="sidbarkol-header-icon">
          <Icon name="sidbar" />
        </span>
        <strong className="sidbarkol-header-matn">PURITY UI DASHBOARD</strong>
      </div>
      <ul className="sidbarkol-Main">
        {ArrSide.map((item) => (
          <>
            
            <li className="sidbarkol-Main-lis">
              
              <Link to={item.to}>
              <div className="sidbarkol-Main-lis-dlink">
                <div className="sidbarkol-Main-lis-dicons">
                <span className="sidbarkol-Main-lis-dicons-icons"
                
                >
                  <Icon name={item.icon} />
                </span>
                </div>
                <span className="sidbarkol-Main-lis-spans">{item.name}</span>
                </div>
              </Link>
            </li>
          </>
        ))}
      </ul>
     {/*  <p>ACCOUNT PAGES</p>
        <ul>
          <li>ss</li>
          <li>ss</li>
        </ul> */}
        <ul className="sidbarkol-Main">
              <p>ACCOUNT PAGES</p>
        {ArrSideSliceP.map((item) => (
          <>
            
            <li className="sidbarkol-Main-lis">
              
              <Link to={item.to}>
              <div className="sidbarkol-Main-lis-dlink">
                <div className="sidbarkol-Main-lis-dicons">
                <span className="sidbarkol-Main-lis-dicons-icons"
                
                >
                  <Icon name={item.icon} />
                </span>
                </div>
                <span className="sidbarkol-Main-lis-spans">{item.name}</span>
                </div>
              </Link>
            </li>
          </>
        ))}</ul>


        <div>
          card
        </div>
    </div>
  );
};

export default Sidebar;
