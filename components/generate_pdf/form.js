import Select from "../common/select";
import Button from "../common/button";
import { useEffect, useState } from "react";

const localStorageItems = ["basicInfo", "educationHistory", "workHistory", "license", "hobby"];

export default function Form({ flug }) {
    const [motivation, setMotivation] = useState([]);

    useEffect(() => {
        const jsonItems = localStorage.getItem("motivation");
        const items = JSON.parse(jsonItems);
        setMotivation(items.inputs);
    }, []);

    const sendPdfData = async() => {
        // 送信用データの取得と整形
        const temp = {};
        localStorageItems.map(item => {
            var jsonItems = localStorage.getItem(item);
            var parse     = JSON.parse(jsonItems);
            temp[item]    = parse.inputs ? parse.inputs : parse;
        });
        // 選択された志望動機取得
        const select  = document.getElementById("select_motivation").value;
        if (select === "志望動機なし") {
            alert("志望動機が作成されていません。作成してからPDF出力をしてください。");
            return;
        }
        var jsonItems = localStorage.getItem("motivation");
        var parse     = JSON.parse(jsonItems);
        const edu     = parse.inputs.filter(input => input.moti_company == select);

        temp["motivation"] = edu[0];
        // JSONにエンコード
        const jsonText = JSON.stringify(temp);
        const url = "https://credit-app-2021.herokuapp.com/generate_pdf/";
        // const url = "http://localhost:8000/generate_pdf/";
        // 送信
        await fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/pdf',
            },
            body: jsonText
          })
        .then(async(res)=> ({
            blob: await res.blob()
        }))
        .then(resObj => {
            const newBlob = new Blob([resObj.blob], { type: 'application/pdf' });
            const objUrl = window.URL.createObjectURL(newBlob);
            window.open(objUrl, '_blank');
        })
        .catch(console.error);
    }

    const getSelectData = () => {
        if (motivation.length <= 0) {
            const items = [
                { moti_company: "志望動機なし", motivation: "志望動機を作成してください。" }
            ]
            return <Select id="select_motivation" name="generate" items={ items } />;
        } else {
            return <Select id="select_motivation" name="generate" items={ motivation } />
        }
    }
    const select = getSelectData();

    return (
        <div className="p-3 md:px-16">
            <p className="font-semibold">志望動機選択</p>
            { select }
            <Button cls="w-full py-3 my-8" disabled={ !flug } func={() => sendPdfData() }>PDF生成</Button>
        </div>
    )
}