import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../layout/Footer/Footer";
import Contacts from "./Contacts/Contacts";

const Layout = () => {
    return (
        <div className="App">
          <Header />
            <Outlet />
            <Contacts/>
          <Footer />
        </div>
    )}

export default Layout;