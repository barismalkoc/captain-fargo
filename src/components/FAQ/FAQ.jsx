import React from 'react';
import {FAQData} from "./FAQData";

function Faq(props) {

  const data = FAQData.data;
  return (
    <div>
      {data.map((info, index) => {
        return(
          <div>
            <h5>{info.title}</h5>
            {info.desc.map((desc, index) => {
                  return(
                      <p>{desc}</p>
                  )
            })}
          </div>

        )
      })}
    </div>
  );
}

export default Faq;