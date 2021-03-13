

export default function Select({ id="", name="", items=[] }) {
    const size = items.length;
    return (
        <select id={ id } name={ name } size={ size }>
            { items.map((item, index) => {
                return <option key={ index } value={ item.name }>{ item.name }</option>;
            })}
        </select>
    )
}