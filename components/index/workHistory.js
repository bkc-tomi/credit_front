import ListInput from "./listInput";
import ListContent from "./listContents";

export default function WorkHistory() {
    const inputList = [
        {type: "date", name: "date", id: "", displayName: "日付", propsValue: "", cls: "w-full"},
        {type: "text", name: "company-name", id: "", displayName: "企業名", propsValue: "", cls: "w-full"},
        {type: "text", name: "type", id: "", displayName: "職種", propsValue: "", cls: "w-full"},
        {type: "number", name: "member", id: "", displayName: "従業員数", propsValue: "", cls: "w-full"},
        {type: "textarea", name: "job", id: "", displayName: "担当業務", propsValue: "", cls: "w-full"},
        {type: "text", name: "in-out", id: "", displayName: "入社・退社等", propsValue: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 職歴情報 -</h2>
            <div>
                <ListContent id="work1">
                    <div className="grid grid-cols-3 md:mx-16 md:my-2">
                        <div className="text-gray-400">2021/04/01</div>
                        <div className="col-span-2 flex flex-col">
                            <div className="flex flex-row flex-wrap">
                                <div className="mx-1 text-lg font-semibold overflow-scroll">株式会社 ***********************************</div>
                                <div className="mx-1 text-gray-400 text-right">入社</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mx-3 text-gray-400">職種: IT</div>
                                <div className="mx-3 text-gray-400">従業員数: 23名</div>
                            </div>
                            <div className="mx-3">
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                            </div>
                        </div>
                    </div>
                </ListContent>
                <ListContent id="work2">
                    <div className="grid grid-cols-3 md:mx-16 md:my-2">
                        <div className="text-gray-400">2021/04/01</div>
                        <div className="col-span-2 flex flex-col">
                            <div className="flex flex-row flex-wrap">
                                <div className="mx-1 text-lg font-semibold overflow-scroll">株式会社 ***********************************</div>
                                <div className="mx-1 text-gray-400 text-right">入社</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mx-3 text-gray-400">職種: IT</div>
                                <div className="mx-3 text-gray-400">従業員数: 23名</div>
                            </div>
                            <div className="mx-3">
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                                情報処理サービスのエンジニアとして３年間従事して参りました。
                            </div>
                        </div>
                    </div>
                </ListContent>
                <div  className="md:mx-16 md:my-3">
                    <ListInput inputs={ inputList }/>
                </div>
            </div>
        </div>
    )
}