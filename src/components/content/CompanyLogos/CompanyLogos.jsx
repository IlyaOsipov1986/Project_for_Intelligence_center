import "../CompanyLogos/CompanyLogos.scss";
import { listCompanyData } from "../../../config";

const CompanyLogos = () => {
    return (
        <div className="company-logos__container">
            {listCompanyData.map((el, i) => {
                return (
                    <img key={i} src={el.logo} alt=""/>
                )
            })}
        </div>
    )
}
export default CompanyLogos;