import { useState, useEffect } from "react";


import Item from "./item";

export default function Hobby() {
    const storageData = {
        hobby: "趣味や特技などを入力してください。",
    }

    const [ hobby, setHobby] = useState("趣味や特技などを入力してください。");

    const handleBeforeunload = (e) => {
        const items = {
            hobby: hobby,
        }
        localStorage.setItem("hobby", JSON.stringify(items));
        console.log("save", items);
    };

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
      
    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeunload);
        return () => window.removeEventListener("beforeunload", handleBeforeunload);
    }, [hobby]);

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 趣味・特技 -</h2>
            <div className="md:mx-16">
                <Item type="textarea" propsValue={ hobby } func={ setHobby } id="hobby"/>
            </div>
        </div>
    )
}