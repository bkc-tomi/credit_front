import Item from "./item";
import ListInput from "./listInput";

export default function BasicInfo() {
    const address = [
        {type: "text", name: "zipcode", id: "", displayName: "郵便番号", value: "", cls: "w-full"},
        {type: "text", name: "address_kana", id: "", displayName: "ふりがな", value: "", cls: "w-full"},
        {type: "text", name: "address", id: "", displayName: "住所", value: "", cls: "w-full"},
    ];
    
    const phoneNumber = [
        {type: "text", name: "phone-number", id: "", displayName: "電話番号", value: "", cls: "w-full"}
    ];
    
    const mail = [
        {type: "mail", name: "mail", id: "", displayName: "メール", value: "", cls: "w-full"}
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
              <Item value="ふりがな" id="kana" type="text"/>
              <Item value="名前" id="name" />
              <Item value="性別" id="gender" />
              <Item value="生年月日" id="birth" type="date" />
              <Item value="年齢" id="years" type="number" />
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 住所 -</h3>
              <ul>
                <li className="my-1">
                  <div className="">0960601</div>
                  <div className="">くまもとけんうきしおがわまちきたおの1180</div>
                  <div className="">熊本県宇城市小川町北小野1180</div>
                </li>
              </ul>
              <ListInput inputs={ address }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 電話番号 -</h3>
              <ul>
                <li className="my-1">
                  <div className="">09073895170</div>
                </li>
              </ul>
              <ListInput inputs={ phoneNumber }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- メールアドレス -</h3>
              <ul>
                <li className="my-1">
                  <div className="">bkc.tomi1979@gmail.com</div>
                </li>
              </ul>
              <ListInput inputs={ mail }/>
            </div>
          </div>
        </div>
    )
}