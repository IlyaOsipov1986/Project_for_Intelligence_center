import Container from "../../components/layout/Container/Container";
import CenterCalendar from "../../components/content/CenterCalendar/CenterCalendar";
import CompanyLogos from "../../components/content/CompanyLogos/CompanyLogos"; 
import EmptyCaps from "../../components/content/EmptyCaps/EmptyCaps";
import Divaider from "../../components/ui/Divaider/Divaider";
import AboutCentre from "../../components/content/AboutCentre/AboutCentre";

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
                <CompanyLogos/>
            </Container>
            <Divaider/>
            <Container>
                <EmptyCaps/>
            </Container>
        </>
    )
}
export default HomePage;