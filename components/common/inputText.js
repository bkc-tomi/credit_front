import { useState } from "react";

export default function InputText({ name="", propsValue="", cls="", id="" }) {
    const applyCls = `border-b-2 border-yellow-500 focus:outline-none ${ cls }`;
    const [val, setVal] = useState(propsValue);

    const handleVal = (e) => {
        setVal(e.target.value);
    }
    return (
        <input 
            id={ `${ id }_input` } type="text" 
            name={ name } value={ val } className={ applyCls }
            onChange={ (e) => handleVal(e) } 
        />
    )
}