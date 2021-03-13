import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState, useEffect } from "react";

export default function License() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        inputs: [],
    }
    // ステート
    const [inputs, setInputs] = useState([]);
    // 入力セット構造定義
    const inputType = [
        {type: "date", id: "li_date", displayName: "日付", cls: "w-full"},
        {type: "text", id: "li_company", displayName: "免許・資格名", cls: "w-full"},
    ];
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("license");
        const items = JSON.parse(jsonItems);
        if (items) {
          // ステートにセット
          setInputs(items.inputs);
        } else {
          // ローカルストレージとステートに初期値をセット
          localStorage.setItem("license", JSON.stringify(storageData));
          setInputs(storageData.inputs);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            inputs: inputs,
        }
        localStorage.setItem("license", JSON.stringify(items));
    }, [inputs]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 免許・資格 -</h2>
            <div>
            {
                    inputs.map((input, index) => {
                        return (
                            <ListContent id={`li${ index }`} key={ index } target={ input } propsValue={ inputs } func={ setInputs }>
                                <div className="grid grid-cols-3">
                                    <div className="text-gray-400">{ input.li_date }</div>
                                    <div className="col-span-2 text-lg font-semibold">{ input.li_company }</div>
                                </div>
                            </ListContent>
                        );
                    })
                }
                <div className="md:mx-16 md:my-3">
                    <ListInput inputs={ inputType } propsValue={ inputs } func={ setInputs }/>
                </div>
            </div>
        </div>
    )
}