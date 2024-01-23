import styled from "styled-components";
import { useState } from "react";

import sunImg from "./SunAndMoon/images/sun.png";
import moonImg from "./SunAndMoon/images/moon.png";

const SunAndMoon = () => {
    const [imgSrc, imgSrcUpdate] = useState(moonImg);

    const changeToSun = () => {
        imgSrcUpdate(sunImg);
    };
    const changeToMoon = () => {
        imgSrcUpdate(moonImg);
    };

    // HTML Layer
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

// CSS Layer
const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 30px;
        color: #1ba0a0;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #166060;
        transition: all 0.5s ease;
    }
    img:hover {
        border-color: #ce8e20;
        background-color: #554506;
    }
`;
