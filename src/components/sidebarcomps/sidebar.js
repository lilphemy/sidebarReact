import React from "react";
import Classes from "./sidebar.module.css";
import { closeSideNav } from "../mainbodycomps/mainbody";
import { Link } from "react-router-dom";


export function SideBarNav () {

    return (
        <section>
            <div className = {Classes.sideNavHead}>
                <div className = {Classes.headingText}>Lilphemy De code-addict</div>
                <span className = {Classes.iconCat} onClick={closeSideNav()}><i className="fa-solid fa-xmark"></i></span>
            </div>
            <div className = {Classes.sideNavCont}>
                <div className = {Classes.linkSect}>
                    <span className = {Classes.iconCat}><i className="fa-solid fa-house"></i></span>
                    <Link to ="/">home</Link>
                </div>
                <div className = {Classes.linkSect}>
                    <span className = {Classes.iconCat}><i className="fa-solid fa-people-group"></i></span>
                    <Link to ="/">team</Link>
                </div>
                <div className = {Classes.linkSect}>
                    <span className = {Classes.iconCat}><i className="fa-solid fa-file-code"></i></span>
                    <Link to ="/">project</Link>
                </div>
                <div className = {Classes.linkSect}>
                    <span className = {Classes.iconCat}><i className="fa-solid fa-calendar"></i></span>
                    <Link to ="/">calendar</Link>
                </div>
                <div className = {Classes.linkSect}>
                    <span className = {Classes.iconCat}><i className="fa-solid fa-folder"></i></span>
                    <Link to ="/">document</Link>
                </div>

            </div>

            <div className = {Classes.socialFoot}>
                <div className = {Classes.socials}><span><i className ="fa-brands fa-instagram"></i></span></div>
                <div className = {Classes.socials}><span><i className ="fa-brands fa-twitter"></i></span></div>
                <div className = {Classes.socials}><span><i className ="fa-brands fa-facebook"></i></span></div>
                <div className = {Classes.socials}><span><i className ="fa-brands fa-linkedin-in"></i></span></div>
                <div className = {Classes.socials}><span><i className ="fa-brands fa-google-plus-g"></i></span></div>
            </div>
        </section>
    )
}