import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState, useEffect } from "react";

export default function EducationHistory() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        inputs: [],
    }
    // ステート
    const [inputs, setInputs] = useState([]);
    // 入力セット構造定義
    const inputType = [
        {type: "date", id: "edu_date", displayName: "日付", cls: "w-full"},
        {type: "text", id: "school", displayName: "学校名", cls: "w-full"},
        {type: "text", id: "sch_in_out", displayName: "入学・卒業等", cls: "w-full"},
    ];
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("educationHistory");
        const items = JSON.parse(jsonItems);
        if (items) {
          // ステートにセット
          setInputs(items.inputs);
        } else {
          // ローカルストレージとステートに初期値をセット
          localStorage.setItem("educationHistory", JSON.stringify(storageData));
          setInputs(storageData.inputs);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            inputs: inputs,
        }
        localStorage.setItem("educationHistory", JSON.stringify(items));
    }, [inputs]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 学歴情報 -</h2>
            <div>
                {
                    inputs.map((input, index) => {
                        return (
                            <ListContent id={`eh${ index }`} key={ index } target={ input } propsValue={ inputs } func={ setInputs }>
                                <div className="grid grid-cols-3">
                                    <div className="text-gray-400">{ input.edu_date }</div>
                                    <div className="col-span-2 grid grid-cols-5">
                                        <div className="col-span-5 md:col-span-4 text-lg font-semibold">{ input.school }</div>
                                        <div className="col-span-5 md:col-span-1 text-right">{ input.sch_in_out }</div>
                                    </div>
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