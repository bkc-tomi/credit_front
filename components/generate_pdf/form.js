import Select from "../common/select";
import Button from "../common/button";

export default function Form() {
    const items = [
        { name: "株式会社　＋＋＋＋＋", motivation: "", time: "", partner: "", partnerDep: "", familyDep: ""},
        { name: "株式会社　ーーーーー", motivation: "", time: "", partner: "", partnerDep: "", familyDep: ""},
        { name: "株式会社　＊＊＊＊＊", motivation: "", time: "", partner: "", partnerDep: "", familyDep: ""},
    ];

    return (
        <div className="p-3 md:px-16">
            <form>
                <p className="font-semibold">志望動機選択</p>
                <Select id="generate" name="generate" items={ items } />
                <Button cls="w-full py-3 my-8">PDF生成</Button>
            </form>
        </div>
    )
}