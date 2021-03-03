import Button from "../common/button";

export default function ListContent({ id="", children }) {
    const handleDisplay = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "absolute bottom-0 right-0 bg-white md:mx-16";
    }
    
    const handleHide = () => {
        const div = document.getElementById(`${ id }_hover`);
        div.className = "absolute bottom-0 right-0 bg-white hidden";
    }
    
    return (
        <div 
            className="relative"
            onMouseOver={ () => handleDisplay() } 
            onMouseLeave={ () => handleHide() }

            onTouch
            onTouchStartCapture={ () => handleDisplay() }
            onTouchEnd={ () => handleHide() }
        >
                { children }
            <div
                id={`${id}_hover`} className="absolute bottom-0 right-0 bg-white hidden"
            >
                <Button cls="px-6">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>
                </Button>
            </div>
        </div>
    )
}