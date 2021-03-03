import ListInput from "./listInput";
import ListContent from "./listContents";

export default function EducationHistory() {
    const inputList = [
        {type: "date", name: "date", id: "", displayName: "日付", propsValue: "", cls: "w-full"},
        {type: "text", name: "school-name", id: "", displayName: "学校名", propsValue: "", cls: "w-full"},
        {type: "text", name: "in-out", id: "", displayName: "入学・卒業等", propsValue: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 学歴情報 -</h2>
            <div>
                <ListContent id="eh1">
                    <div className="grid grid-cols-3">
                        <div className="text-gray-400">2021/04/01</div>
                        <div className="col-span-2 grid grid-cols-5">
                            <div className="col-span-5 md:col-span-4 text-lg font-semibold">熊本県立 ************</div>
                            <div className="col-span-5 md:col-span-1 text-right">入学</div>
                        </div>
                    </div>
                </ListContent>
                <ListContent id="eh2">
                    <div className="grid grid-cols-3">
                        <div className="text-gray-400">2022/03/01</div>
                        <div className="col-span-2 grid grid-cols-5">
                            <div className="col-span-5 md:col-span-4 text-lg font-semibold">熊本県立 ************</div>
                            <div className="col-span-5 md:col-span-1 text-right">卒業</div>
                        </div>
                    </div>
                </ListContent>

                <div className="md:mx-16 md:my-3">
                    <ListInput inputs={ inputList }/>
                </div>
            </div>
        </div>
    )
}