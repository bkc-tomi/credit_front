export default function Button({cls="", func=null, id="", children }) {
    const applyCls = `border border-yellow-500 text-yellow-500 px-2 py-1 focus:outline-none hover:bg-gray-100 ${ cls }`;

    const handleClick = () => {
        if (func) {
            func();
        }
    }
    return (
        <button id={ `${ id }_button`} className={ applyCls } onClick={ () => handleClick() }>
            { children }
        </button>
    )
}