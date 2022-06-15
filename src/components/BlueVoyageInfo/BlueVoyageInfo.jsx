import React from 'react';
import "./BlueVoyageInfo.scss"
import {BlueVoyageData} from "./BlueVoyageData";
import "./BlueVoyageInfo.scss"
function BlueVoyageInfo(props) {

  const data = BlueVoyageData.data[0];
  const footerData = BlueVoyageData.footerData[0];
  return (
    <div className={"blue-voyage"}>
      <br/>
      <div className={"blue-voyage-info"}>
        <h1>Mavi Yolculuk Nedir ?</h1>
        <br/>
        {data.map((info, index) => {
          return (
            <div className={"blue-voyage-container"} key={index}>
              {info.desc.map((info, index) => {
                return <p key={index}>{info}</p>
              })}
              <br/>

              <div className={"images"}>
                {info.images.map((image, index) => {
                  return <img src={image} key={index}/>
                })}
              </div>
              <br/>
              {footerData.desc.map((desc, index) => {
                return <p key={index}>{desc}</p>
              })}
              <br/>
            </div>
            )
        })}


      </div>



    </div>
  );
}

export default BlueVoyageInfo;