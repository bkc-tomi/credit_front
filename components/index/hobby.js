import Item from "./item";

export default function Hobby() {

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 趣味・特技 -</h2>
            <div>
                <Item type="textarea" value="" id="hobby" />
            </div>
        </div>
    )
}