import React from "react";
import Classes from "./modalcomp.module.css"
import { contextUpdate } from "../mainbodycomps/mainbody";



function ModalComp() {
    return (
        <>
            <div className={Classes.coverUp}>
                <div className={Classes.modalBlock}>
                    <div className={Classes.closeBtnBlock}>
                        <span className={Classes.btnCloser} onClick={contextUpdate()}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                    <div className={Classes.modalPage}>
                        <h1>this is the modal page</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalComp;