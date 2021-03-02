import { useState } from "react";

export default function TextArea({ name="", value="", cls="", id="" }) {
    const applyCls = `border-2 border-yellow-500 focus:outline-none w-full ${ cls }`;
    const [val, setVal] = useState(value);

    const handleVal = (e) => {
        setVal(e.target.value);
    }
    return (
        <textarea 
            id={ `${ id }_input` } name={ name } 
            className={ applyCls } onChange={ (e) => handleVal(e) } 
        >
            { val }
        </textarea>
    )
}