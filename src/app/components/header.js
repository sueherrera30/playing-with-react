import React from "react";

export class Header extends React.Component {
    render() {
        let greet = "";
        if(true) {
            return greet = <p> hello baby B) </p>
        }
        return(
            <div>
                <h5> I should be the header, but i dont have style yet... </h5>
                {greet}
            </div>    
        );
    }
}
