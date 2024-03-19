import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <p>
                    <strong>HTML</strong> stands for{" "}
                    <span style={{ color: "blue" }}>
                        HyperText Markup Language
                    </span>
                    . It defines the structure and content of a web page using
                    tags and elements.
                    <br />
                    <strong>CSS</strong> stands for{" "}
                    <span style={{ color: "green" }}>
                        Cascading Style Sheets
                    </span>
                    . It controls the presentation and appearance of a web page
                    using rules and properties.
                    <br />
                    <strong>JavaScript</strong> enables the behavior and
                    interactivity of a web page by manipulating HTML and CSS
                    elements.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <p>
                    <strong>Git</strong> is a software for managing code history
                    and collaborating with other developers.
                    <br />
                    <strong>Github</strong> is a service that hosts Git
                    repositories online and provides additional features like
                    issue tracking and code review.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <p>
                    <strong>JQuery</strong> is like doing a project by hand,
                    step by step. <strong>React</strong> is like having a smart
                    organizer helping you out. It organizes project pieces
                    neatly and efficiently, making it great for managing large
                    projects.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <p>
                    <strong>Front-End Developer</strong> designs and builds the
                    visible parts of a website or app using HTML, CSS, and
                    JavaScript.
                    <br />
                    <strong>Back-End Developer</strong> works on the
                    behind-the-scenes aspects like databases and server logic.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <p>
                    <strong>Root Relative</strong> links start from the root of
                    the application's URL, ensuring link functionality
                    regardless of the current page.
                    <br />
                    <strong>Document Relative</strong> links specify paths
                    relative to the current document's location.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <p>
                    <strong>JPG/JPEG</strong> are best for photographs,{" "}
                    <span style={{ color: "red" }}>GIFs</span> support
                    animations, <span style={{ color: "purple" }}>PNGs</span>{" "}
                    are suitable for images with sharp edges and transparency,
                    and <strong>SVGs</strong> are scalable vector graphics ideal
                    for logos and icons.
                </p>
            </SingleEssay>

            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <p>
                    Each role has specific responsibilities in Agile
                    development:
                    <br />
                    <strong>Product Manager</strong> oversees the product vision
                    and strategy.
                    <br />
                    <strong>Product Owner</strong> represents the customer's
                    needs.
                    <br />
                    <strong>Business Analyst</strong> bridges the gap between
                    business and development.
                    <br />
                    <strong>Scrum Master</strong> ensures adherence to Scrum
                    practices.
                    <br />
                    <strong>UX Designer</strong> focuses on user experience.
                    <br />
                    <strong>Developer/Engineer</strong> writes code and
                    implements features.
                    <br />
                    <strong>QA/SDET</strong> ensures product quality through
                    testing.
                    <br />
                    <strong>DevOps</strong> streamlines software delivery and
                    operations.
                </p>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
