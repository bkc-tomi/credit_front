import Button from "../common/button";
import ImputFile from "../common/imputFile";
export default function Form() {
    return (
        <form>
            <ImputFile id="json-file" name="json-file" cls="mx-3 md:mx-16 my-5" />
            <div className="text-center">
                <Button cls="m-3 px-16 py-3 md:mx-16">取り込み</Button>
            </div>
        </form>
    )
}