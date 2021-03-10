import ListInput from "./listInput";
import ListContent from "./listContents";
import { useState } from "react";

export default function License() {
    const [inputs, setInputs] = useState([]);
    const inputType = [
        {type: "date", id: "li_date", displayName: "日付", cls: "w-full"},
        {type: "text", id: "li_company", displayName: "免許・資格名", cls: "w-full"},
    ];

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