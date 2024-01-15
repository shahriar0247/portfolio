import Nav from './nav';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Section1></Section1>
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
export default App;
