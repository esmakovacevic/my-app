import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";


const Layout = ({ children }) => {
    return (
        <div className="app">   
        <div className=""></div>
        <Header />
      <div className="container">
        <Sidebar />
        <Outlet/>
      </div>
        <Footer />
    </div>
      )
  }
  
  export default Layout;
  