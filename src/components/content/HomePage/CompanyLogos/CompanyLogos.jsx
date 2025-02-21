import "./CompanyLogos.scss";
import { listCompanyData } from "../../../../config.js";

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