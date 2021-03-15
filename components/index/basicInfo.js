import { useEffect, useState } from "react";
import Item from "./item";
import ListInput from "./listInput";
import ListContent from "./listContents";

export default function BasicInfo() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        kana: "カナ", name: "名前", gender: "性別", birth: "誕生日", years: "年齢",
        address: [], phoneNumber: [], mail: [],
    }
    // ステート
    const [kana, setKana] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [years, setYears] = useState("");
    const [address, setAddress] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [mail, setMail] = useState([]);
    // 入力セット構造定義
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
    
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("basicInfo");
        const items = JSON.parse(jsonItems);
        if (items) {
            // ステートにセット
            setKana(items.kana);
            setName(items.name);
            setGender(items.gender);
            setBirth(items.birth);
            setYears(items.years);
            setAddress(items.address);
            setPhoneNumber(items.phoneNumber);
            setMail(items.mail);
        } else {
            // ローカルストレージとステートに初期値をセット
            localStorage.setItem("basicInfo", JSON.stringify(storageData));
            setKana(storageData.kana);
            setName(storageData.name);
            setGender(storageData.gender);
            setBirth(storageData.birth);
            setYears(storageData.years);
            setAddress(storageData.address);
            setPhoneNumber(storageData.phoneNumber);
            setMail(storageData.mail);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            kana: kana, name: name, gender: gender, birth: birth, years: years,
            address: address, phoneNumber: phoneNumber, mail: mail,
        }
        localStorage.setItem("basicInfo", JSON.stringify(items));
    }, [kana, name, gender, birth, years, address, phoneNumber, mail]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="bg-gray-200 flex flex-col md:grid md:grid-rows-none md:grid-cols-4 px-2 py-6 md:px-6 md:py-12">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-gray-500 md:hidden my-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            証明写真はPDF出力の際に選択してください。
            </div>
            <div className="hidden md:text-gray-500 md:flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="225" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            証明写真はPDF出力の際に選択してください。
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-yellow-500 text-lg text-center">- 基本情報 -</h2>
            <div className="md:px-2">
              <Item propsValue={ kana } func={ setKana } id="kana" type="text" cls="text-sm mb-0"/>
              <Item propsValue={ name } func={ setName } id="name" cls="text-lg font-semibold mt-0"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-2 md:px-4">
              <div className="flex flex-row justify-start items-center text-gray-400">
                性別:　
                <Item propsValue={ gender } func={ setGender } id="gender" cls="text-gray-400"/>
              </div>
              <div className="flex flex-row justify-start items-center text-gray-400">
                生年月日:　
                <Item propsValue={ birth } func={ setBirth } id="birth" type="date" cls="text-gray-400"/>
              </div>
              <div className="flex flex-row justify-start items-center text-gray-400">
                年齢:　
                <Item propsValue={ years } func={ setYears } id="years" type="number"cls="text-gray-400" />
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 住所 -</h3>
              {
                address.map((val, index) => {
                  return (
                    <ListContent id={`address${ index }`} key={ index } target={ val } propsValue={ address } func={ setAddress } cls="md:px-4">
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
                    <ListContent id={`phone${ index }`} key={ index } target={ val } propsValue={ phoneNumber } func={ setPhoneNumber } cls="md:px-4">
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
                    <ListContent id={`mail${ index }`} key={ index } target={ val } propsValue={ mail } func={ setMail} cls="md:px-4">
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