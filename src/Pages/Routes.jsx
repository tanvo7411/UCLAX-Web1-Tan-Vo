import styled from "styled-components";

import Home from "./Home";
import Contact from "./Contact";
import Staff from "./Staff";

const Routes = () => {
    return (
        <RoutesStyled>
            Routes
            <Home />
            <Contact />
            <Staff />
        </RoutesStyled>
    );
};

export default Routes;

const RoutesStyled = styled.div``;
