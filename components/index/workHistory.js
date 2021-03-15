import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState, useEffect } from "react";

export default function WorkHistory() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        inputs: [],
    }
    // ステート
    const [inputs, setInputs] = useState([]);
    // 入力セット構造定義
    const inputList = [
        {type: "date", id: "work_date", displayName: "日付", cls: "w-full"},
        {type: "text", id: "work_company", displayName: "企業名", cls: "w-full"},
        {type: "text", id: "type", displayName: "職種", cls: "w-full"},
        {type: "number", id: "member", displayName: "従業員数", cls: "w-full"},
        {type: "textarea", id: "job", displayName: "担当業務", cls: "w-full"},
        {type: "text", id: "work_in_out", displayName: "入社・退社等", cls: "w-full"},
    ];
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("workHistory");
        const items = JSON.parse(jsonItems);
        if (items) {
          // ステートにセット
          setInputs(items.inputs);
        } else {
          // ローカルストレージとステートに初期値をセット
          localStorage.setItem("workHistory", JSON.stringify(storageData));
          setInputs(storageData.inputs);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            inputs: inputs,
        }
        localStorage.setItem("workHistory", JSON.stringify(items));
    }, [inputs]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 職歴情報 -</h2>
            <div>
                {
                    inputs.map((input, index) => {
                        return (
                        <ListContent id={`work${ index }`} key={ index } target={ input } propsValue={ inputs } func={ setInputs } cls="md:px-16">
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
                                    <div className="mx-3 overflow-ellipsis">
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