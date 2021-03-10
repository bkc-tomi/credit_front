import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState } from "react";

export default function WorkHistory() {
    const [inputs, setInputs] = useState([]);
    const inputList = [
        {type: "date", id: "work_date", displayName: "日付", cls: "w-full"},
        {type: "text", id: "work_company", displayName: "企業名", cls: "w-full"},
        {type: "text", id: "type", displayName: "職種", cls: "w-full"},
        {type: "number", id: "member", displayName: "従業員数", cls: "w-full"},
        {type: "textarea", id: "job", displayName: "担当業務", cls: "w-full"},
        {type: "text", id: "work_in_out", displayName: "入社・退社等", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 職歴情報 -</h2>
            <div>
                {
                    inputs.map((input, index) => {
                        return (
                        <ListContent id={`work${ index }`} key={ index } target={ input } propsValue={ inputs } func={ setInputs }>
                            <div className="grid grid-cols-3">
                                <div className="text-gray-400">{ input.work_date }</div>
                                <div className="col-span-2 flex flex-col">
                                    <div className="flex flex-row flex-wrap">
                                        <div className="mx-1 text-lg font-semibold overflow-scroll">{ input.work_company }</div>
                                        <div className="mx-1 text-gray-400 text-right">{ input.work_in_out }</div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="mx-3 text-gray-400">職種: {input.type}</div>
                                        <div className="mx-3 text-gray-400">従業員数: { input.member }</div>
                                    </div>
                                    <div className="mx-3">
                                        { input.job }
                                    </div>
                                </div>
                            </div>
                        </ListContent>
                        );
                    })
                }
                <div  className="md:mx-16 md:my-3">
                    <ListInput inputs={ inputList } propsValue={ inputs } func={ setInputs }/>
                </div>
            </div>
        </div>
    )
}