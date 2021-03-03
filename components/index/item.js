import { useState } from "react";

import Text from "../common/text";
import InputText from "../common/inputText";
import InputNumber from "../common/inputNumber";
import InputDate from "../common/inputDate";
import InputMail from "../common/inputMail";
import TextArea from "../common/textarea";
import Button from "../common/button";

export default function Item({ type, propsValue="", id="", cls="" }) {
    const applyCls =`m-2 ${ cls }`
    const [flg, setFlg] = useState(false);

    const handleFlg = () => {
        if (flg) {
            setFlg(false);
        } else {
            setFlg(true);
        }
    }

    const handleDisplay = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "md:block";
    }
    
    const handleHide = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "md:hidden";
    }

    const returnInput = () => {
        switch (type) {
            case "mail":
                return <InputMail id={ id } cls="m-2" propsValue={ propsValue } />;
            case "date":
                return <InputDate id={ id } cls="m-2" propsValue={ propsValue } />;
            case "number":
                return <InputNumber id={ id } cls="m-2" propsValue={ propsValue } />;
            case "textarea":
                return <TextArea id={ id } cls="m-2" propsValue={ propsValue } />;
            default:
                return <InputText id={ id } cls="m-2" propsValue={ propsValue } />;
        }
    }
    const input = returnInput();

    if (flg) {
        // インプットを表示
        return (
            <div className="flex justify-start items-center">
                { input }
                <Button id={ `${ id }_submit` } cls="mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
                    </svg>
                </Button>
                <Button func={() => handleFlg() }>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </Button>
            </div>
        );
        
    } else {
        // テキストを表示
        return (
            <div 
                className="flex justify-start items-center" 
                onMouseOver={ () => handleDisplay() } 
                onMouseLeave={ () => handleHide() }

                onTouch
                onTouchStartCapture={ () => handleDisplay() }
                onTouchEnd={ () => handleHide() }
            >
                <Text cls={ applyCls } >{ propsValue }</Text>
                <div id={`${id}_hover`} className="md:hidden">
                    <Button func={() => handleFlg() }>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </Button>
                </div>
            </div>
        );

    }
}