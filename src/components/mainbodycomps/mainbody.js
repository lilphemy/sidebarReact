import React, { useContext, useState } from "react"
import Classes from "./mainbody.module.css";
import ModalComp from "../modalcomp/modalcomp";
import { SideBarNav } from "../../components/sidebarcomps/sidebar"

const closeContext = React.createContext("");
const setCloseContext = React.createContext("");
const sideNavCont = React.createContext("");


export const contextUpdate = () => {
    return useContext(setCloseContext)
}

function closeSideNav () {
    return useContext(sideNavCont)
}

function MainBodyView(props) {
    //const [sideNav, setSideNav] = useState(<SideBarNav/>)
    const [sideNavBoo, setSideNavBoo] = useState(false);
    const [modalMaker, setModalMaker] = useState(false);
    const [modalComp, setModalComp] = useState(<ModalComp />)
    //const [funcPick, setFuncPick] = useState(closeModal())
    const modalPop = () => setModalMaker(true);

    const closeModal = function () {
        setModalMaker(prev => !prev);
    }

    function closeSiderNav () {
        setSideNavBoo(prev => !prev)
    }

    return (
        <>
            <closeContext.Provider value={modalMaker}>
                <setCloseContext.Provider value = {closeModal}>
                    <main className={Classes.sectionGrab}>
                        {sideNavBoo && <sideNavCont.Provider value = {closeSiderNav}><SideBarNav/></sideNavCont.Provider>}
                        <div>
                            <span className={Classes.menuBar} onClick = {() => setSideNavBoo(true)}><i className="fa-solid fa-bars"></i></span>
                        </div>
                        {modalMaker && modalComp}
                        <button onClick={() => modalPop()} className={Classes.btnHolder}>{props.btnText}<span className={Classes.btnIcon}><i className="fa-solid fa-folder-open"></i></span></button>
                    </main>
                </setCloseContext.Provider>
            </closeContext.Provider>

        </>
    )
}


export { MainBodyView, closeContext, closeSideNav}