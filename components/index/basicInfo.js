import Item from "./item";
import ListInput from "./listInput";
import ListContent from "./listContents";

export default function BasicInfo() {
    const address = [
        {type: "text", name: "zipcode", id: "", displayName: "郵便番号", propsValue: "", cls: "w-full"},
        {type: "text", name: "address_kana", id: "", displayName: "ふりがな", propsValue: "", cls: "w-full"},
        {type: "text", name: "address", id: "", displayName: "住所", propsValue: "", cls: "w-full"},
    ];
    
    const phoneNumber = [
        {type: "text", name: "phone-number", id: "", displayName: "電話番号", propsValue: "", cls: "w-full"}
    ];
    
    const mail = [
        {type: "mail", name: "mail", id: "", displayName: "メール", propsValue: "", cls: "w-full"}
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
              <Item propsValue="ぐーぐる たろう" id="kana" type="text" cls="text-sm"/>
              <Item propsValue="グーグル　太郎" id="name" cls="text-lg font-semibold"/>
              <Item propsValue="男" id="gender" cls="text-gray-400"/>
              <Item propsValue="1998年9月27日" id="birth" type="date" cls="text-gray-400"/>
              <Item propsValue="22歳" id="years" type="number"cls="text-gray-400" />
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 住所 -</h3>
              <ListContent id="address1">
                  <div className="">150-0002</div>
                  <div className="text-sm">とうきょうとしぶやくしぶや 3-21-3</div>
                  <div className="font-semibold mb-2">東京都渋谷区渋谷 3-21-3</div>
              </ListContent>
              <ListInput inputs={ address }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- 電話番号 -</h3>
              <ListContent id="phone1">
                  <div className="mb-2">+81-3-6384-9000</div>
              </ListContent>

              <ListInput inputs={ phoneNumber }/>
            </div>

            <div>
              <h3 className="text-gray-400 text-md text-center">- メールアドレス -</h3>
              <ListContent id="mail1">
                  <div className="mb-2">aaa@gmail.com</div>
              </ListContent>
              <ListInput inputs={ mail }/>
            </div>
          </div>
        </div>
    )
}