import NavBar from "./Navbar.tsx";
import React, {ReactNode} from "react";
import {Outlet} from "react-router-dom";

export interface ParentProps{
    children?: ReactNode,
    scrollEventIn: boolean;
}
const PageLayout: React.FC<ParentProps> = () => {

    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default PageLayout;