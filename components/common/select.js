

export default function Select({ id="", name="", items=[] }) {
    const size = items.length;
    return (
        <select id={ id } name={ name } size={ size }>
            { items.map(item => {
                return <option value={ item.name }>{ item.name }</option>;
            })}
        </select>
    )
}