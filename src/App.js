import React, { Component } from "react";
import { MainBodyView } from "./components/mainbodycomps/mainbody";
import ModalComp from "./components/modalcomp/modalcomp"
import { Routes, Route } from "react-router-dom";


class DisplayView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popUp: "",
            btnText: "show modal",
            modalcomp: <ModalComp />
        }
    }

    render() {
        return (
            <>
                <Routes>
                    <Route  path = "/" element = {<MainBodyView {...this.state} />} />
                    <Route path = "*" element = "doesn't exist!" />
                </Routes>
            </>
        )
    }
}

export default DisplayView;
