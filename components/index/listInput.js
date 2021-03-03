import { useState } from "react";

import Input from "../common/inputText";
import InputDate from "../common/inputDate";
import InputMail from "../common/inputMail";
import InputNumber from "../common/inputNumber";
import TextArea from "../common/textarea";
import Button from "../common/button";

export default function ListInput({ inputs }) {
    const [show, setShow] = useState({display: "none"});
    const handleShow = () => {
        if (show.display === "none") {
            setShow({display: "grid"});
        } else {
            setShow({display: "none"});
        }
    }
    return (
        <div>
            <div 
                className="text-yellow-500 cursor-pointer float-right"
                onClick={ (e) => handleShow(e) }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className="grid grid-cols-5" style={show}>
                <div className="col-span-4">
                    {
                        inputs.map(input => {
                            switch (input.type) {
                                case "mail":
                                    return (
                                        <div className="md:grid md:grid-cols-6 m-1">
                                            <div>{ input.displayName }</div>
                                            <div className="col-span-5">
                                                <InputMail 
                                                    id={ input.id }
                                                    name={ input.name }
                                                    propsValue={ input.propsValue }
                                                    cls={input.cls }
                                                />
                                            </div>
                                        </div>
                                    );
                                case "date":
                                    return (
                                        <div className="md:grid md:grid-cols-6 m-1">
                                            <div>{ input.displayName }</div>
                                            <div className="col-span-5">
                                                <InputDate
                                                    id={ input.id }
                                                    name={ input.name }
                                                    propsValue={ input.propsValue }
                                                    cls={input.cls }
                                                />
                                            </div>
                                        </div>
                                    );
                                case "number":
                                    return (
                                        <div className="md:grid md:grid-cols-6 m-1">
                                            <div>{ input.displayName }</div>
                                            <div className="col-span-5">
                                                <InputNumber 
                                                    id={ input.id }
                                                    name={ input.name }
                                                    propsValue={ input.propsValue }
                                                    cls={input.cls }
                                                />
                                            </div>
                                        </div>
                                    );
                                case "textarea":
                                    return (
                                        <div className="md:grid md:grid-cols-6 m-1">
                                            <div>{ input.displayName }</div>
                                            <div className="col-span-5">
                                                <TextArea 
                                                    id={ input.id }
                                                    name={ input.name }
                                                    propsValue={ input.propsValue }
                                                    cls={input.cls }
                                                />
                                            </div>
                                        </div>
                                    );
                                default:
                                    return (
                                        <div className="md:grid md:grid-cols-6 m-1">
                                            <div>{ input.displayName }</div>
                                            <div className="col-span-5">
                                                <Input 
                                                    id={ input.id }
                                                    name={ input.name }
                                                    propsValue={ input.propsValue }
                                                    cls={input.cls }
                                                />
                                            </div>
                                        </div>
                                    );
                            }
                        })
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Button cls="px-4 py2 md:px-8 md:py-3">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}