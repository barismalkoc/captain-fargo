import React from 'react';
import {FAQData} from "./FAQData";
import DropDown from "../DropDown/DropDown";
import "./FAQ.scss"
function Faq(props) {

  const data = FAQData.data;
  return (
    <div className={"faq"}>
      {data.map((info, index) => {
        return(
          <DropDown data={info} key={index}></DropDown>
        )
      })}
    </div>
  );
}

export default Faq;