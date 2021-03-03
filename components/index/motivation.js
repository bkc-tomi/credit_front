import ListInput from "./listInput";
import ListContent from "./listContents";

export default function Motivation() {
    const inputList = [
        {type: "text", name: "date", id: "", displayName: "企業名", propsValue: "", cls: "w-full"},
        {type: "textarea", name: "company-name", id: "", displayName: "志望動機", propsValue: "", cls: "w-full"},
        {type: "text", name: "type", id: "", displayName: "通勤時間", propsValue: "", cls: "w-full"},
        {type: "text", name: "member", id: "", displayName: "扶養家族", propsValue: "", cls: "w-full"},
        {type: "text", name: "job", id: "", displayName: "配偶者", propsValue: "", cls: "w-full"},
        {type: "text", name: "in-out", id: "", displayName: "配偶者の扶養", propsValue: "", cls: "w-full"},
        {type: "textarea", name: "in-out", id: "", displayName: "その他・希望欄", propsValue: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 志望動機 -</h2>
            <ListContent>
                <div className="grid grid-cols-3">
                    <div>株式会社　＋＋＋＋＋</div>
                    <div className="col-span-2 flex flex-col">
                        <div className="my-3">
                            <p className="text-gray-400">志望動機</p>
                            経理の経験を生かして、将来経営戦略に直接参画できる経理のスペシャリストになりたいと考えています。前職では経理部門と経営戦略部門が分離しており、経理は各部門から提出された数値をまとめることのみでした。経営戦略を構築できる経理担当者を目指しています。
                        </div>
                        <div className="flex flex-row flex-wrap my-3">
                            <div className="text-gray-400 mx-3">通勤時間: １時間</div>
                            <div className="text-gray-400 mx-3">扶養家族: なし</div>
                            <div className="text-gray-400 mx-3">配偶者: なし</div>
                            <div className="text-gray-400 mx-3">配偶者の扶養: なし</div>
                        </div>
                        <div className="my-3">
                            <p className="text-gray-400">その他・希望欄</p>
                            営業職を希望します。現在就業中のため平日は１７時以降にお電話いただけると幸いです。
                        </div>
                    </div>
                </div>
            </ListContent>
            <div className="md:mx-16 md:my-3">
                <ListInput inputs={ inputList } />
            </div>
        </div>
    )
}