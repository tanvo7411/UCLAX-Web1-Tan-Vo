import styled from "styled-components";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades, aboutMe } = member;

    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <StaffMemberStyled>
            <div className="flip-card-outer" onClick={handleFlip}>
                <div
                    className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}
                >
                    <div className="card front">
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                    </div>
                    <div className="card back">
                        <div className="bottom">
                            <p>
                                <b>Year Started:</b> {yearStarted}
                            </p>
                            <Accolades accolades={accolades} />
                            <p>
                                <b>About Me:</b> {aboutMe}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #eeeeee;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #014444;
        padding: 5px 10px;
        margin: 0px;
    }

    .flip-card-outer {
        perspective: 1000px;
        width: 300px;
        margin: 10px;
        height: 460px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    .card {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border: 2px solid #014444;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .front {
        z-index: 2;
        background-color: white;
    }

    .back {
        transform: rotateY(180deg);
        background-color: #eeeeee;
    }
`;
