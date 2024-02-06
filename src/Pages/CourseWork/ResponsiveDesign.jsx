import React, { useState, useEffect } from "react";
import styled from "styled-components";

const breakpoints = {
    small: "(max-width: 600px)",
    medium: "(min-width: 601px) and (max-width: 1024px)",
    large: "(min-width: 1025px)",
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 1200,
        height: 800,
        mode: "large",
    });

    const updateWindowSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        let mode = "large";
        if (window.matchMedia(breakpoints.small).matches) {
            mode = "small";
        } else if (window.matchMedia(breakpoints.medium).matches) {
            mode = "medium";
        }

        setWindowSize({ width, height, mode });
    };

    useEffect(() => {
        updateWindowSize();

        window.addEventListener("resize", updateWindowSize);

        return () => {
            window.removeEventListener("resize", updateWindowSize);
        };
    }, []);

    return windowSize;
};

const Boxes = () => {
    const { width, height, mode } = useWindowSize();

    return (
        <BoxesStyled>
            <div className="boxes">
                {}
                {[...Array(6).keys()].map((i) => (
                    <div key={i} className={`box box${i + 1}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </BoxesStyled>
    );
};

const BoxesStyled = styled.div`
    @media ${breakpoints.small} {
        .boxes {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 10px;
        }
    }

    @media ${breakpoints.medium} {
        .boxes {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media ${breakpoints.large} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }

    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        color: white;
        margin: 10px;
    }

    .box1 {
        border-radius: 10px;
    }
    .box2 {
        border-radius: 20px;
    }
    .box3 {
        border-radius: 30px;
    }
    .box4 {
        border-radius: 40px;
    }
    .box5 {
        border-radius: 50px;
    }
    .box6 {
        border-radius: 60px;
    }

    @media ${breakpoints.small} {
        .box1 {
            background-color: lightblue;
        }
        .box2 {
            background-color: skyblue;
        }
        .box3 {
            background-color: deepskyblue;
        }
        .box4 {
            background-color: dodgerblue;
        }
        .box5 {
            background-color: royalblue;
        }
        .box6 {
            background-color: navy;
        }
    }

    @media ${breakpoints.medium} {
        .box1 {
            background-color: lightgreen;
        }
        .box2 {
            background-color: limegreen;
        }
        .box3 {
            background-color: mediumseagreen;
        }
        .box4 {
            background-color: seagreen;
        }
        .box5 {
            background-color: forestgreen;
        }
        .box6 {
            background-color: darkgreen;
        }
    }

    @media ${breakpoints.large} {
        .box1 {
            background-color: pink;
        }
        .box2 {
            background-color: lightcoral;
        }
        .box3 {
            background-color: coral;
        }
        .box4 {
            background-color: orangered;
        }
        .box5 {
            background-color: red;
        }
        .box6 {
            background-color: darkred;
        }
    }
`;

export default Boxes;
