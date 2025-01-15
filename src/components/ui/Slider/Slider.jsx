import "../Slider/Slider.scss";
import bgImageHeader from "../../../assets/img/bgImageHeader.jpg";
import sliderImageTwo from "../../../assets/img/sliderImageTwo.png";
import sliderIconOne from "../../../assets/img/icons/sliderIconOne.svg";

const Slider = () => {

    return (
        <div className="slider" style={{
            background: `url(${sliderImageTwo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }}>
            <div className="slider-block">
                <img src={sliderIconOne} alt="иконка" />
                <div className="slider-square">
                </div>
            </div>
        </div>
    )
}
export default Slider;