import "../Blog/Blog.scss";
import React from "react";
import TitleBlock from "../../ui/TitleBlock/TitleBlock";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import BlogCard from "../Blog/BlogCard";
import { blogCardData } from "../../../config";

const Blog = () => {
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
                    <RowLeftRightButtons/>
                </div>
            </div>
            <div className="blog__cards-block">
                {blogCardData.map((el) => {
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