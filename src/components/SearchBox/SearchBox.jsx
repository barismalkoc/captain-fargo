import React from 'react';
import "./SearchBox.scss"
function SearchBox(props) {
  return (
    <div className={"search-box-container"}>
      <ul className={"nav nav-tabs"}>
        <li className={"nav nav-item cabin active"}>
          <span>Kabin Kirala</span>
        </li>
        <li className={"nav nav-item private"}>
          <span>Özel Yat Kirala</span>
        </li>
        <li className={"nav nav-item fellowship"}>
          <span>Arkadaşlık No</span>
        </li>
      </ul>
      <div className={"search-box"}>
        <div className={"tab-content"}>
          <div className={"row"}>
            <div className={"input-group routes"}>
              <select className={"form-control custom-select"}>
                <option value={"bozburun-selimiye"}>Bozburun - Selimiye - 4 Gün</option>
              </select>
            </div>
            <div className={"input-group dates"}>
              <input className={"form-control"} id={"cabin-date"}
              value placeholder={"Tarih Seç"} readOnly/>
            </div>
            <div className={"input-group"}>
              <button className={"btn-search"} type={"button"} id={"cabin-go"}>
                <span className={"text"}>GÖRÜNTÜLE</span>
              </button>
            </div>
          </div>
          <div className={"text-container"}>
            İstediğiniz rota ve tarihi seçin, seçtiğiniz rotanın detaylarını inceleyin.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;