import { useEffect } from "react";

export default function TextArea({ cls="", id="", propsValue="" }) {
    const applyCls = `border-2 border-yellow-500 focus:outline-none w-full ${ cls }`;

    useEffect(() => {
        if (id) {
            const elm = document.getElementById(`${ id }_input`);
            elm.value = propsValue;
        }
    });

    return (
        <textarea 
            id={ `${ id }_input` } 
            className={ applyCls }
        ></textarea>
    )
}