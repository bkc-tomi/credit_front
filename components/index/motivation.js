import ListInput from "./listInput";

export default function Motivation() {
    const inputList = [
        {type: "text", name: "date", id: "", displayName: "企業名", value: "", cls: "w-full"},
        {type: "textarea", name: "company-name", id: "", displayName: "志望動機", value: "", cls: "w-full"},
        {type: "text", name: "type", id: "", displayName: "通勤時間", value: "", cls: "w-full"},
        {type: "text", name: "member", id: "", displayName: "扶養家族", value: "", cls: "w-full"},
        {type: "text", name: "job", id: "", displayName: "配偶者", value: "", cls: "w-full"},
        {type: "text", name: "in-out", id: "", displayName: "配偶者の扶養", value: "", cls: "w-full"},
        {type: "textarea", name: "in-out", id: "", displayName: "その他・希望欄", value: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 志望動機 -</h2>
            <div>
                <ListInput inputs={ inputList } />
            </div>
        </div>
    )
}