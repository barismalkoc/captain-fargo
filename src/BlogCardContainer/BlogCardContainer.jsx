import React from 'react';
import {BlogCardContainerData} from "./BlogCardContainerData";
import "./BlogCardContainer.scss"

function BlogCardContainer(props) {
  return (

    <div className={"blog-container"}>
        <h3 className={"section-title"}>CAPTAIN FARGO BLOG</h3>
        <div className={"blog-card-row"}>
          {BlogCardContainerData.map((blogCard, index) => {
            return (
              <div className={"blog-card"}>
                <img className={"blog-card-image"} src={blogCard.image}/>
                <h3>{blogCard.title}</h3>
                <p>{blogCard.desc}</p>

              </div>
            )
          })}

        </div>


      <div className={"text-right"}>
        <li>BLOĞUMUZA GÖZ ATIN</li>
        <img src={"https://captainfargo.com/static/main/ic-right-arrow.179f968435bb.svg"}/>
      </div>
    </div>

  );
}

export default BlogCardContainer;