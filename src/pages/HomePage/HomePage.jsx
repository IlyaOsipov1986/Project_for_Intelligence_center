import Container from "../../components/layout/Container/Container";
import CenterCalendar from "../../components/content/CenterCalendar/CenterCalendar";
import CompanyLogos from "../../components/content/CompanyLogos/CompanyLogos"; 
import EmptyCaps from "../../components/content/EmptyCaps/EmptyCaps";
import Divaider from "../../components/ui/Divaider/Divaider";

const HomePage = () => {
    
    return (
        <>
            <Container>
                <CenterCalendar/>
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