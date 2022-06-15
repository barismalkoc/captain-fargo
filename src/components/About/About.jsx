import React from 'react';
import "./About.scss"
import {AboutData} from "./AboutData";
function About(props) {
  const aboutData = AboutData.about[0];
  const info = AboutData.data[0];
  return (
    <div className={"about"}>
      <div className={"about-info"}>
        <br/>
        <h1>{aboutData.title}</h1>
        <br/>
        <p>{aboutData.aboutDesc}</p>
        <br/>
        <div className={"images-container"}>
          {aboutData.images.map((info, index) => {
            return(
              <div className={"image-container"} key={index}>
                <img src={info.image}/>
                <h5>{info.imageTitle}</h5>
              </div>
            )
          })}
        </div>

        <div>
          {info.map((info, index) => {
            return (
              <div key={index}>
                <h3>{info.title}</h3>
                <br/>
                <div>
                  {info.desc.map((info,index) => {
                    return (
                      <p key={index}>{info}</p>
                    )
                  })}
                </div>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
      </div>

  );
}

export default About;