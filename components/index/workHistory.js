import ListInput from "./listInput";

export default function WorkHistory() {
    const inputList = [
        {type: "date", name: "date", id: "", displayName: "日付", value: "", cls: "w-full"},
        {type: "text", name: "company-name", id: "", displayName: "企業名", value: "", cls: "w-full"},
        {type: "text", name: "type", id: "", displayName: "職種", value: "", cls: "w-full"},
        {type: "number", name: "member", id: "", displayName: "従業員数", value: "", cls: "w-full"},
        {type: "text", name: "job", id: "", displayName: "担当業務", value: "", cls: "w-full"},
        {type: "text", name: "in-out", id: "", displayName: "入社・退社等", value: "", cls: "w-full"},
    ];

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 職歴情報 -</h2>
            <div>
                <div className="hidden md:block">
                    <table className="table-fixed w-full my-6">
                        <thead className="text-gray-400">
                            <tr className="border-b-2 border-gray-400">
                                <th className="w-2/12">日付</th>
                                <th className="w-3/12">企業名</th>
                                <th className="w-2/12">職種</th>
                                <th className="w-1/12">従業員数</th>
                                <th className="w-3/12">担当業務</th>
                                <th className="w-1/12">入社・退社等</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="text-center">2021/04/01</td>
                                <td>株式会社 ************</td>
                                <td className="text-center">IT</td>
                                <td className="text-center">23名</td>
                                <td>ソフトウェア開発</td>
                                <td className="text-center">入社</td>
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
                                <td className="text-center">企業名</td>
                                <td colSpan="2">株式会社 ************</td>
                            </tr>
                            <tr className="">
                                <td className="text-center">職種</td>
                                <td colSpan="2">IT</td>
                            </tr>
                            <tr className="">
                                <td className="text-center">従業員数</td>
                                <td colSpan="2">23名</td>
                            </tr>
                            <tr className="">
                                <td className="text-center">担当業務</td>
                                <td colSpan="2">ソフトウェア開発</td>
                            </tr>
                            <tr className="">
                                <td className="text-center">入社・退社等</td>
                                <td colSpan="2">入社</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ListInput inputs={ inputList }/>
            </div>
        </div>
    )
}