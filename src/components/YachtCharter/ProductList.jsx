import React from 'react';
import "./productList.scss"

function ProductList(props) {
  return (
    <div className={"product"}>
      <div className={"product-list"}>
        <h3>
          30/07/2022 Kalkışlı Tekneler
        </h3>
        <div className={"yacht-box"}>
          <div className={"yacht-row"}>
            <a>
              <img
                src={"https://www.bavariayat.com/fileadmin/_processed_/d/2/csm_bavaria-sy-cline-overview-c45-freisteller_0824c64a29.jpg"}/>
            </a>
            <div className={"text-container"}>
              <a>
                <h3>Standart Tekne</h3>
              </a>
              <p>6 Standart Kabin </p>
            </div>
            <div className={"price-box"}>
              <div className={"price-header"}>
                <span className={"price-discounted"}>82350₺</span>
                <span className={"price-discounted-percentage"}> %20 indirim</span>
              </div>
              <div className={"price"}>
                65880₺
              </div>
              <div className={"price-per"}>
                /hafta
              </div>
              <a className={"inspect-button"}>
                İNCELE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={"custom-date-form"}>
        <form>
          <p>Özel tarih ile rezervasyon talebi oluşturmak için lütfen aşağıdaki formu doldurun. Müsaitlik olması
            durumunda size yardımcı olmaktan mutluluk duyacağız.</p>
          <div className={"input-row"}>
              <div className={"row"}>
                    <div className={"input-group"}>
                      <input name={"name"} type={"text"} placeholder={"İsim - Soyisim"}/>
                    </div>
                <div className={"input-group"}>
                  <input name={"email"} type={"email"} placeholder={"E-Posta Adresi"}/>
                </div>
              </div>
            <div className={"row"}>
              <div className={"input-group"}>
                <input name={"name"} type={"text"} placeholder={"İsim - Soyisim"}/>
              </div>
              <div className={"input-group"}>
                <input name={"email"} type={"email"} placeholder={"E-Posta Adresi"}/>
              </div>
            </div>
            <div className={"row"}>
              <div className={"input-group"}>
                <input name={"phone"} type={"text"} placeholder={"Telefon No"}/>
              </div>
              <div className={"input-group"}>
                <input name={"port"} type={"text"} placeholder={"Kalkış Limanı"}/>
              </div>
            </div>
            <div className={"row"}>
              <div className={"input-group"}>
                <textarea name={"notes"} placeholder={"Notlar (Yetişkin, çocuk ve bebek yolcu sayısını mutlaka belirtiniz)"}/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductList;