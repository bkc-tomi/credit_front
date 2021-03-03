import Item from "./item";

export default function Hobby() {

    return (
        <div className="p-2 md:p-6">
            <h2 className="text-yellow-500 text-lg text-center">- 趣味・特技 -</h2>
            <div className="md:mx-16">
                <Item type="textarea" propsValue="" 
                    id="hobby" 
                    propsValue="読書。年間200冊読破！ おススメの本を友人から借りるのが好きです。ビジネス書から恋愛小説までジャンルを問いません。"
                />
            </div>
        </div>
    )
}