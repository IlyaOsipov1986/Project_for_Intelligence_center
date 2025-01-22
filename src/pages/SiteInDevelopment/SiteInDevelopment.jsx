import "./SiteInDevelopment.scss";
import logotypeIIcentre from "../../assets/img/icons/logotypeIIcentre.svg";
import ArrowLinkButton from "../../components/ui/ArrowLinkButton/ArrowLinkButton";

const SiteInDevelopment = () => {

    return (
            <div className="site-in-development__container">
                <div className="site-in-development__item-1">
                    <img src={logotypeIIcentre} alt=""/>
                </div>
                <div className="site-in-development__item-2"/>
                <div className="site-in-development__item-3"/>
                <div className="site-in-development__item-4"/>
                <div className="site-in-development__item-5">
                    <div className="item-title">
                        Сайт в разработке
                    </div>
                    <ArrowLinkButton
                        title="Telegram"
                    />
                </div>
                <div className="site-in-development__item-6">
                    <p>
                        Cейчас за этой странице создается сайт, это займет еще некоторое время, а пока следите за нами в Телеграм
                    </p>
                </div>
                <div className="site-in-development__item-7"/>
                <div className="site-in-development__item-8"/>
                <div className="site-in-development__item-9"/>
            </div>
    )
}
export default SiteInDevelopment;