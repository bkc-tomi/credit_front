import { useState, useEffect } from "react";


import Item from "./item";

export default function Hobby() {
    /** 変数定義 ---------------------------------------------------------------------*/
    // ローカルストレージ構造定義
    const storageData = {
        hobby: "趣味や特技などを入力してください。",
    }
    // ステート
    const [ hobby, setHobby ] = useState("趣味や特技などを入力してください。");
    /** 副作用フック -----------------------------------------------------------------*/
    // ローカルストレージからデータの取得(初期値のセット)
    useEffect(() => {
        // ローカルストレージの内容を取得
        const jsonItems = localStorage.getItem("hobby");
        const items = JSON.parse(jsonItems);
        if (items) {
          // ステートにセット
          setHobby(items.hobby);
        } else {
          // ローカルストレージとステートに初期値をセット
          localStorage.setItem("hobby", JSON.stringify(storageData));
          setHobby(storageData.hobby);
        }
    }, []);
    // ローカルストレージへデータの保存(ステートが変更されるごと)
    useEffect(() => {
        const items = {
            hobby: hobby,
        }
        localStorage.setItem("hobby", JSON.stringify(items));
    }, [hobby]);
    /** コンポーネント返却 ------------------------------------------------------------*/
    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 趣味・特技 -</h2>
            <div className="md:mx-16">
                <Item type="textarea" propsValue={ hobby } func={ setHobby } id="hobby"/>
            </div>
        </div>
    )
}