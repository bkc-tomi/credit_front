import { useEffect } from "react";

export default function InputMail({ cls="", id="", propsValue="" }) {
    const applyCls = `border-b-2 border-yellow-500 focus:outline-none ${ cls }`;
    
    useEffect(() => {
        if (id) {
            const elm = document.getElementById(`${ id }_input`);
            elm.value = propsValue;
        }
    });

    return (
        <input 
            id={ `${ id }_input` } type="mail" className={ applyCls } 
        />
    )
}