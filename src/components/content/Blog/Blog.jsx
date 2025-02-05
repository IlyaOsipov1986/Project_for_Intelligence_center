import "../Blog/Blog.scss";
import React from "react";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import BlogCard from "../Blog/BlogCard";
import { blogCardData } from "../../../config";
import useCardsCarousel from "../../../utils/hooks/useCardsCarousel.js";

const Blog = () => {

    const { visibleCards, nextGroup, prevGroup } = useCardsCarousel(blogCardData, 3);

    return (
        <div className="blog__container">
            <div className="blog__title-wrap">
                <TitleBlock
                    title="Блог"
                    titleBtn="ВСЕ СТАТЬИ"
                    activeBtn={true}
                    width={true}
                />
                <div className="blog__title-event-btn">
                    {blogCardData.length >= 3 && <RowLeftRightButtons
                        nextGroup={nextGroup}
                        prevGroup={prevGroup}
                    />}
                </div>
            </div>
            <div className="blog__cards-block">
                {visibleCards.map((el) => {
                    return (
                        <React.Fragment key={el.id}>
                            <BlogCard
                                item={el}
                            />       
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}
export default Blog;