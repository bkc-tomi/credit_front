import Button from "../common/button";

export default function ListContent({ id="", target={}, propsValue=[], func=null, cls, children }) {
    const applyCls = `relative hover:shadow-sm rounded-md md:my-2 p-2 ${ cls }`
    const handleDisplay = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "absolute top-0 right-0";
    }
    
    const handleHide = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "absolute top-0 right-0 hidden";
    }

    const handleDelete = () => {
        const tgtStr = Object.values(target).join("^");
        const newValues = propsValue.filter(val => Object.values(val).join("^") != tgtStr);
        if (func) {
            func(newValues);
        }
    }
    
    return (
        <div 
            className={ applyCls }
            onMouseOver={ () => handleDisplay() } 
            onMouseLeave={ () => handleHide() }
            onTouchStartCapture={ () => handleDisplay() }
            onTouchEnd={ () => handleHide() }
        >
                { children }
            <div
                id={`${id}_hover`} className="absolute top-2 right-0 hidden"
            >
                <Button cls="border-none rounded-full bg-yellow-300 hover:bg-yellow-200 md:p-0 md:m-2" func={ handleDelete }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </Button>
            </div>
        </div>
    )
}