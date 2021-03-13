import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState, useEffect } from "react";

export default function Motivation() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        inputs: [],
    }
    // ステート
    const [inputs, setInputs] = useState([]);
    // 入力セット構造定義
    const inputList = [
        {type: "text", id: "moti_company", displayName: "企業名", cls: "w-full"},
        {type: "textarea", id: "motivation", displayName: "志望動機", cls: "w-full"},
        {type: "text", id: "time", displayName: "通勤時間", cls: "w-full"},
        {type: "text", id: "member", displayName: "扶養家族", cls: "w-full"},
        {type: "text", id: "spouse", displayName: "配偶者", cls: "w-full"},
        {type: "text", id: "spouse_depend", displayName: "配偶者の扶養", cls: "w-full"},
        {type: "textarea", id: "other", displayName: "その他・希望欄", cls: "w-full"},
    ];
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("motivation");
        const items = JSON.parse(jsonItems);
        if (items) {
          // ステートにセット
          setInputs(items.inputs);
        } else {
          // ローカルストレージとステートに初期値をセット
          localStorage.setItem("motivation", JSON.stringify(storageData));
          setInputs(storageData.inputs);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            inputs: inputs,
        }
        localStorage.setItem("motivation", JSON.stringify(items));
    }, [inputs]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 志望動機 -</h2>
            {
                    inputs.map((input, index) => {
                        return (
                        <ListContent id={`motivation${ index }`} key={ index }  target={ input } propsValue={ inputs } func={ setInputs }>
                            <div className="grid grid-cols-3">
                                <div>{input.moti_company}</div>
                                <div className="col-span-2 flex flex-col">
                                    <div className="my-3">
                                        <p className="text-gray-400">志望動機</p>
                                        { input.motivation }
                                    </div>
                                    <div className="flex flex-row flex-wrap my-3">
                                        <div className="text-gray-400 mx-3">通勤時間:{ input.time }</div>
                                        <div className="text-gray-400 mx-3">扶養家族: { input.member }</div>
                                        <div className="text-gray-400 mx-3">配偶者: { input.spouse }</div>
                                        <div className="text-gray-400 mx-3">配偶者の扶養: { input.spouse_depend }</div>
                                    </div>
                                    <div className="my-3">
                                        <p className="text-gray-400">その他・希望欄</p>
                                        { input.other }
                                    </div>
                                </div>
                            </div>
                        </ListContent>
                        );
                    })
                }
            <div className="md:mx-16 md:my-3">
                <ListInput inputs={ inputList } propsValue={ inputs } func={ setInputs }/>
            </div>
        </div>
    )
}