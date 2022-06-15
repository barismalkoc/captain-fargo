import React from 'react';
import BlogCard from "../BlogCard/BlogCard";
import {FargoBlogData} from "./FargoBlogData";
import "./FargoBlog.scss"
function FargoBlog(props) {
  const data = FargoBlogData;
  return (
    <div className={"fargo-blog"}>
      <div className={"blog"}>
        <BlogCard props = {data}></BlogCard>
      </div>
    </div>
  );
}

export default FargoBlog;