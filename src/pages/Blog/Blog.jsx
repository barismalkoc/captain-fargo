import React from 'react';
import BlogCard from "../../components/BlogCard/BlogCard";
import FargoBlog from "../../components/FargoBlog/FargoBlog";

function Blog(props) {
  return (
    <div className={"blog"}>
      <FargoBlog></FargoBlog>
    </div>
  );
}

export default Blog;