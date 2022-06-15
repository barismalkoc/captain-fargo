import React, {useState} from 'react';
import "./DropDown.scss";

function DropDown({data}) {

  const [isOpen, setIsOpen] = useState(false);

  function setDropDown () {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <div className={"dropdown"}>
      <div className={"title-container"}>
        <h5 className={"title"} onClick={setDropDown}>{data.title}</h5>
      </div>
        {isOpen ? <div className={"content"}>
            {data.desc.map((desc, index) => {
              if (isOpen) {
                return (
                  <p className={"description"} key={index}>{desc}</p>
                )
              }
            })}
          </div>
          : <></>
        }


    </div>

  )
}

export default DropDown;