import styled from "styled-components";
import { breakpoints, useMediaQuery } from "@/Common/useMediaQuery.jsx";

const ResponsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled>
            <h2>RPG Coffee Shop</h2>
            <div className="boxes">
                {isMediumAndUp && <div className="box box1">1</div>}
                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>
        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const coffeeColors = {
    dark: "#3B2A1A",
    medium: "#7B5E40",
    light: "#C0A080",
};

const ResponsiveDesignStyled = styled.div`
    color: white;
    background-color: ${coffeeColors.dark};
    font-family: "Papyrus", fantasy;

    h2 {
        text-shadow: 2px 2px ${coffeeColors.medium};
    }

    .boxes {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        margin: 10px;
        transition: background-color 0.3s ease;
    }

    .box1 {
        background-color: ${coffeeColors.light};
    }
    .box2 {
        background-color: ${coffeeColors.medium};
        border-radius: 40px;
    }
    .box3 {
        background-color: ${coffeeColors.light};
        border-radius: 100px;
    }

    @media ${breakpoints.isMediumAndUp} {
        .box {
            background-color: ${coffeeColors.medium};
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .box {
            background-color: ${coffeeColors.dark};
        }
    }
`;
