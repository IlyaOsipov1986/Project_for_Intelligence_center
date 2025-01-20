import Container from "../../components/layout/Container/Container";
import CenterCalendar from "../../components/content/CenterCalendar/CenterCalendar";
import CompanyLogos from "../../components/content/CompanyLogos/CompanyLogos"; 
import EmptyCaps from "../../components/content/EmptyCaps/EmptyCaps";
import Divaider from "../../components/ui/Divaider/Divaider";
import AboutCentre from "../../components/content/AboutCentre/AboutCentre";
import ApplicationSolutions from "../../components/content/ApplicationSolutions/ApplicationSolutions";
import Blog from "../../components/content/Blog/Blog";
import Team from "../../components/content/Team/Team";

const HomePage = () => {
    
    return (
        <>
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
                <Team/>
            <Divaider/>
            <Container>
                <EmptyCaps/>
            </Container>
            <Divaider/>
            <Container>
                <Blog/>
            </Container>
        </>
    )
}
export default HomePage;