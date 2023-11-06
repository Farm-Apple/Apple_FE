import NavBar from "./Navbar.tsx";
import styled from "styled-components";
import React, {ReactNode} from "react";

const StyledLayout = styled.div`
    
`

interface ParentProps {
    children: ReactNode;
}

const PageLayout: React.FC<ParentProps> = ({children}) => {
    return(
        <>
            <NavBar/>
            {children}
            <StyledLayout>

            </StyledLayout>
        </>
    )
}

export default PageLayout;