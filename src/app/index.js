import React from "react";
import { render } from "react-dom";
import { Header } from "./components/header"
import { Home } from "./components/Home"

class App extends React.Component {
    
    render() {
        const person = {
            name: "susu",
            hobbies: ["cello","crossfit","mahikari","giving classes"],
            age: 26,
        }
        return (
            <div>
                <Header/>
                <h1> hello, Im a pretty newcomponent</h1>
                <Home person = { person }/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
