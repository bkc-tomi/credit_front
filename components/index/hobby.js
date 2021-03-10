import { useState } from "react";


import Item from "./item";

export default function Hobby() {
    const [ hobby, setHobby] = useState("趣味や特技などを入力してください。");

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 趣味・特技 -</h2>
            <div className="md:mx-16">
                <Item type="textarea" propsValue={ hobby } func={ setHobby } id="hobby"/>
            </div>
        </div>
    )
}