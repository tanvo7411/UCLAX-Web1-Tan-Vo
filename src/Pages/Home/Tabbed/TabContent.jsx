import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "@/Common/useMediaQuery";

const coffeeColors = {
    dark: "#3B2A1A",
    medium: "#7B5E40",
    light: "#C0A080",
};

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>
            <div className="column2">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: ${coffeeColors.dark} @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
    }

    h3 {
        font-size: 30px;
        color: ${coffeeColors.light};
    }

    p {
        font-size: 18px;
        color: ${coffeeColors.medium};
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
