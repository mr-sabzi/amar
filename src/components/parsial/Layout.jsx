
import Sidebar from "../UI/components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import "../Styles/Layout.css"
import Footer from "../UI/components/Footer";

const Layout = () => {
  return (
    <div className="kolpr">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div className="kolOutLet">
          <Outlet />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
