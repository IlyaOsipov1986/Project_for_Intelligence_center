import { Outlet } from "react-router-dom";
import Container from "./Container/Container"; 
import Header from "./Header/Header";
import Footer from "../layout/Footer/Footer";

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
      </div>
    )
}
export default Layout;