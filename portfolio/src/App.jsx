import React from 'react';
import Nav from './nav';
import Section3 from './Section3';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
    );
}
function Section1() {
    return <div className="section1">
        <div className="content">

            <div className="name">Ahmed Shahriar</div>
            <div className="description">
                <span style={{ fontWeight: "300" }}> 7 years</span> in Software |
                <span style={{ fontWeight: "300" }}> 3 years</span> in Web Development |
                <span style={{ fontWeight: "300" }}> 34+</span> Solutions |
                <span style={{ fontWeight: "300" }}> 25+</span> Clients
            </div>

        </div>
    </div>;
}
function Section2() {
    return <div className="section2">
        <div className="content">
            <div className="heading">My Work</div>
            <div className="description">
                I'm a self-taught software developer, focusing on web and mobile development. Academics and  School wasn't really my thing,
                I've found my passion developing creative and innovative software through research and development.
                I've gained solid experience over the years working with various companies and businesses and developing all sorts of solutions.            </div>

        </div>
    </div>;
}



export default App;
