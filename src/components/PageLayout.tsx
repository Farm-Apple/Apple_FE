import NavBar from "./Navbar.tsx";
import styled from "styled-components";
import React, {ReactNode} from "react";

const StyledLayout = styled.div`
  padding: 0 20px;
`

interface ParentProps {
    children: ReactNode;
}

const PageLayout: React.FC<ParentProps> = ({children}) => {
    return(
        <StyledLayout>
            <NavBar/>
            {children}
        </StyledLayout>
    )
}

export default PageLayout;