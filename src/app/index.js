import React from "react";
import { render } from "react-dom";
import { Header } from "./components/header"
import { Home } from "./components/Home"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <h1> hello, Im a pretty newcomponent</h1>
                <Home/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
