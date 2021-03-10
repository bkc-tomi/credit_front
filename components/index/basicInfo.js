import { useState } from "react";
import Item from "./item";
import ListInput from "./listInput";
import ListContent from "./listContents";

export default function BasicInfo() {
    const [kana, setKana] = useState("カナ");
    const [name, setName] = useState("名前");
    const [gender, setGender] = useState("性別");
    const [birth, setBirth] = useState("誕生日");
    const [years, setYears] = useState("年齢");
    const [address, setAddress] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [mail, setMail] = useState([]);
     
    const addressType = [
        {type: "text", id: "zipcode", displayName: "郵便番号", cls: "w-full"},
        {type: "text", id: "address_kana", displayName: "ふりがな", cls: "w-full"},
        {type: "text", id: "address", displayName: "住所", cls: "w-full"},
    ];
    
    const phoneNumberType = [
        {type: "text", id: "phone", displayName: "電話番号", cls: "w-full"}
    ];
    
    const mailType = [
        {type: "mail", id: "mail", displayName: "メール", cls: "w-full"}
    ];

    return (
        <div className="bg-gray-200 flex flex-col md:grid md:grid-rows-none md:grid-cols-4 px-2 py-6 md:px-6 md:py-12">
          <div className="flex justify-center items-center">
            <div className="md:hidden">
              <img src="/pen01.gif" alt="写真" width={100} height={150}/>
            </div>
            <div className="hidden md:block">
              <img src="/pen01.gif" alt="写真" width={150} height={225}/>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-yellow-500 text-lg text-center">- 基本情報 -</h2>
            <div>
              <Item propsValue={ kana } func={ setKana } id="kana" type="text" cls="text-sm"/>
              <Item propsValue={ name } func={ setName } id="name" cls="text-lg font-semibold"/>
              <Item propsValue={ gender } func={ setGender } id="gender" cls="text-gray-400"/>
              <Item propsValue={ birth } func={ setBirth } id="birth" type="date" cls="text-gray-400"/>
              <Item propsValue={ years } func={ setYears } id="years" type="number"cls="text-gray-400" />
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 住所 -</h3>
              {
                address.map((val, index) => {
                  return (
                    <ListContent id={`address${ index }`} key={ index } target={ val } propsValue={ address } func={ setAddress }>
                        <div className="">{val.zipcode}</div>
                        <div className="text-sm">{ val.address_kana }</div>
                        <div className="font-semibold mb-2">{ val.address }</div>
                    </ListContent>
                  );
                })
              }
              <ListInput inputs={ addressType } propsValue={ address } func={ setAddress }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 電話番号 -</h3>
              {
                phoneNumber.map((val, index) => {
                  return (
                    <ListContent id={`phone${ index }`} key={ index } target={ val } propsValue={ phoneNumber } func={ setPhoneNumber }>
                        <div className="mb-2">{ val.phone }</div>
                    </ListContent>
                  );
                })
              }

              <ListInput inputs={ phoneNumberType } propsValue={ phoneNumber } func={ setPhoneNumber }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- メールアドレス -</h3>
              {
                mail.map((val, index) => {
                  return (
                    <ListContent id={`mail${ index }`} key={ index } target={ val } propsValue={ mail } func={ setMail}>
                        <div className="mb-2">{ val.mail }</div>
                    </ListContent>
                  );
                })
              }
              <ListInput inputs={ mailType } propsValue={ mail } func={ setMail }/>
            </div>
          </div>
        </div>
    )
}