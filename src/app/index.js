import React from "react";
import { render } from "react-dom";
import { Header } from "./components/header"
import { Home } from "./components/Home"


class App extends React.Component { 
    render() {
        const person = {
            book: "iliada",
            hobbies: ["cello","crossfit","mahikari","giving classes"]
        }
        return (
            <div>
                <h1> hello, Im a pretty newcomponent</h1>
                <Home/>
                <Header name ={ "sue" } song={ "alive" } person = { person }>
                    <h1> hello, Im a child </h1>
                </Header>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
