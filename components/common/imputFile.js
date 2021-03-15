

export default function InputFile({ id="", name="", cls="" }) {
    const applyCls = `flex flex-row flex-wrap items-center ${ cls }`;

    const getFileName = () => {
        const fileTag = document.getElementById(id);
        const pTag    = document.getElementById("input-file-name-view");
        pTag.innerText = fileTag.files[0].name;
    }
    return (
        <div className={ applyCls }>
            <div className="input-file-wrapper">
                    <input 
                        type="file" id={ id } name={ name } 
                        accept=".json"
                        onChange={ () => getFileName() }
                    />
                    <label htmlFor={ name }>ファイルを選択</label>
            </div>
            <p id="input-file-name-view" className="text-gray-400 mx-3">ファイルが選択されていません。</p>
        </div>
    )
}