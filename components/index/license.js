import ListInput from "./listInput";

export default function License() {
    const inputList = [
        {type: "date", name: "date", id: "", displayName: "日付", value: "", cls: "w-full"},
        {type: "text", name: "company-name", id: "", displayName: "免許・資格名", value: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 免許・資格 -</h2>
            <div>
                <div className="hidden md:block">
                    <table className="table-fixed w-full my-6">
                        <thead className="text-gray-400">
                            <tr className="border-b-2 border-gray-400">
                                <th className="w-1/3">日付</th>
                                <th className="w-2/3">免許・資格名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="text-center">2021/04/01</td>
                                <td>英検一級</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="block md:hidden">
                    <table className="table-fixed w-full my-6">
                        <tbody className="border">
                            <tr className="">
                                <td className="text-center">日付</td>
                                <td colSpan="2">2021/04/01</td>
                            </tr>
                            <tr className="">
                                <td className="text-center">免許・資格名</td>
                                <td colSpan="2">英検一級</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ListInput inputs={ inputList }/>
            </div>
        </div>
    )
}