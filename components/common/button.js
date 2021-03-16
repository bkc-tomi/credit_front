export default function Button({cls="", func=null, id="", disabled=true, children }) {

    const handleClick = () => {
        if (func) {
            func();
        }
    }
    if (disabled) {
        return (
            <button id={ `${ id }_button`} className={ `border border-gray-500 text-gray-500 px-2 py-1 focus:outline-none hover:bg-gray-100 ${ cls }` } onClick={ () => handleClick() } disabled>
                無効
            </button>
        )
    }
    return (
        <button id={ `${ id }_button`} className={ `border border-yellow-500 text-yellow-500 px-2 py-1 focus:outline-none hover:bg-gray-100 ${ cls }` } onClick={ () => handleClick() }>
            { children }
        </button>
    )
    
}