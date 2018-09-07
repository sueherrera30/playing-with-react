import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>QUE TRANZA</h1>
                <h5> I should be the header, but i dont have style yet... </h5>
                <div> my name is: { this.props.name } </div>
                <div> my fav sog is: { this.props.song } </div>
                <div> my fav book is: { this.props.person.book } </div>
                 <ul>
                     <p>my hobbies are:</p>
                     {this.props.person.hobbies.map((hobby,i)=> {return <li key= {i} >{ hobby }</li> })}
                 </ul>
            </div>    
        );
    }
}
