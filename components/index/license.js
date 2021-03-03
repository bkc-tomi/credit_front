import ListInput from "./listInput";
import ListContent from "./listContents";

export default function License() {
    const inputList = [
        {type: "date", name: "date", id: "", displayName: "日付", propsValue: "", cls: "w-full"},
        {type: "text", name: "company-name", id: "", displayName: "免許・資格名", propsValue: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 免許・資格 -</h2>
            <div>
                <ListContent id="li-1">
                    <div className="grid grid-cols-3 md:mx-16 md:my-2">
                        <div className="text-gray-400">2021/04/01</div>
                        <div className="col-span-2 text-lg font-semibold">英検一級</div>
                    </div>
                </ListContent>
                <ListContent id="li-2">
                    <div className="grid grid-cols-3 md:mx-16 md:my-2">
                        <div className="text-gray-400">2021/07/01</div>
                        <div className="col-span-2 text-lg font-semibold">漢検一級</div>
                    </div>
                </ListContent>

                <div className="md:mx-16 md:my-3">
                    <ListInput inputs={ inputList }/>
                </div>
            </div>
        </div>
    )
}