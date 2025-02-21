import "./Blog.scss";
import PropTypes from 'prop-types';
import arrowRightRed from "../../../../assets/img/icons/arrowRightRed.svg";

const BlogCard = ({item}) => {
    return (
        <div className="blog__card">
            <img src={item.imgCard} alt=""/>
            <div className="blog__card-content">
                <div className="blog__card-title">
                    <h6>{item.titleCard}</h6>
                    <p>{item.textCard}</p>
                </div>
                <div className="blog__card-date-link">
                    <p>{item.date}</p>
                    {item.link && 
                    <a href="#">
                        К СТАТЬЕ<img src={arrowRightRed} alt=""/>
                    </a>}
                </div>
            </div>
        </div>
    )
}

BlogCard.propTypes = {
    item: PropTypes.object,
}

export default BlogCard;