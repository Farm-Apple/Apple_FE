import NavBar from "./Navbar.tsx";
import styled from "styled-components";
import React from "react";
import {ParentProps} from "../page/Home/Home.tsx";


const StyledLayout = styled.div`
    
`
const PageLayout: React.FC<ParentProps> = ({children, inScroll}) => {

    return(
        <>
            <NavBar inScroll={inScroll}/>
            {children}
            <StyledLayout>

            </StyledLayout>
        </>
    )
}

export default PageLayout;