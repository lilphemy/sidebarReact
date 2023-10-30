import React from "react";
import ReactDom from "react-dom/client";
import DisplayView from "./App"
import { BrowserRouter as Router } from "react-router-dom";


function MainView() {


    return (
        <React.StrictMode>
            <React.Fragment>
                <Router>
                    <DisplayView />
                </Router>
            </React.Fragment>
        </React.StrictMode>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MainView />);