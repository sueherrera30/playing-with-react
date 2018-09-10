import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component {

    constructor(props) {
        super();
        this.age = props.person.age;
    }
    subirEdad() {
        this.age += 10; 
        console.log(this.age)
    }
    render() {
        return (
            <div>
                <h3> thiss is a little  sweet home</h3>
                <p>me llamo { this.props.person.name } y tengo { }</p>  
                <button onClick = {this.subirEdad.bind(this) }> sube la edad </button>     
            </div>
        );
    }
}

Home.propTypes = {
    age: PropTypes.number,
}