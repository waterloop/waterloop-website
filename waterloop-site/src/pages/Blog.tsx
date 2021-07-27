import React from "react";
import Hero from "components/Hero/General";
import { Blogs } from "components/Blogs";

const Blog: React.FC = () => (
    <div>
        <Hero
            title="BLOG"
            description="Learn about our thoughts"
            anchor="#blog_list"
        ></Hero>
        <div id="#blog_list"></div>
        <div className="pageContainer">
            <Blogs />
        </div>
    </div>
)

export default Blog
