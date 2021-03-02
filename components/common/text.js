export default function Text({ children, cls="", id="" }) {
    const applyCls = `${cls}`;

    return (
        <div id={ `${ id }_text` } className={ applyCls }>
            { children }
        </div>
    );
}