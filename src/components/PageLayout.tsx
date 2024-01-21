import NavBar from "./Navbar.tsx";
import React, {ReactNode, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

export interface ParentProps{
    children?: ReactNode,
    inScroll?: number,
    scrollEventIn:boolean,
}
const PageLayout: React.FC<ParentProps> = () => {

    const [inScroll, setInScroll] = useState(0);
    const [scrollEventIn, setScrollEventIn] = useState(false);
    const location = useLocation();

    const currentPath = location.pathname;

    const handleScroll = () => {
        setInScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // HomePage인 / 만 currentPath에 있으면, scrollEventIn state를 true로 변경
        if(currentPath === "/"){
            setScrollEventIn(true);
        } else {
            setScrollEventIn(false);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[inScroll])

    return(
        <>
            <NavBar inScroll={inScroll} scrollEventIn={scrollEventIn}/>
            <Outlet/>
        </>
    )
}

export default PageLayout;