import Container from "../../components/layout/Container/Container";
import CenterCalendar from "../../components/content/HomePage/CenterCalendar/CenterCalendar";
import CompanyLogos from "../../components/content/HomePage/CompanyLogos/CompanyLogos";
import EmptyCaps from "../../components/content/HomePage/EmptyCaps/EmptyCaps";
import Divaider from "../../components/ui/Divaider/Divaider";
import AboutCentre from "../../components/content/HomePage/AboutCentre/AboutCentre";
import ApplicationSolutions from "../../components/content/HomePage/ApplicationSolutions/ApplicationSolutions";
import Blog from "../../components/content/HomePage/Blog/Blog";
import Team from "../../components/content/HomePage/Team/Team";
import Slider from "../../components/ui/Slider/Slider";
import Technologies from "../../components/content/HomePage/Technologies/Technologies";

const HomePage = () => {
    
    return (
        <main className="main">  
            <Slider/>
            <Container>
                <CenterCalendar/>
            </Container>
            <Container>
                <AboutCentre/>
            </Container>
            <Divaider/>
            <Container>
                <ApplicationSolutions/>
            </Container>
            <Divaider/>
            <Container>
                <CompanyLogos/>
            </Container>
            <Divaider/>
                <Technologies/>
                <Team/>
            <Divaider/>
            <Container>
                <EmptyCaps/>
            </Container>
            <Divaider/>
            <Container>
                <Blog/>
            </Container>
        </main>
    )
}
export default HomePage;