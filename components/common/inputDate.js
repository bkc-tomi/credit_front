import { useEffect } from "react";

export default function InputDate({ cls="", id="", propsValue="" }) {
    const applyCls = `border-b-2 border-yellow-500 focus:outline-none ${ cls }`;

    useEffect(() => {
        if (id) {
            const elm = document.getElementById(`${ id }_input`);
            elm.value = propsValue;
        }
    });

    return (
        <input 
            id={ `${ id }_input` } type="date" className={ applyCls }
        />
    )
}