import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../layout/Footer/Footer";
import Contacts from "./Contacts/Contacts";
import Slider from "../ui/Slider/Slider";

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
              <Outlet />
            </main>
            <Contacts/>
            <Footer />
      </div>
    )
}
export default Layout;