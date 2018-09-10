import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.person.initialAge,
            status: 0,
        }

        setInterval(() => {
            this.setState({
                status: this.state.status  += 5,
            });
        },1000);

    }
    subirEdad() {
        console.log(this.state.age)
        this.setState({
            age: this.state.age += 10,
        });
    }

    render() {
        return (
            <div>
                <h3> thiss is a little  sweet home</h3>
                <p>me llamo { this.state.age } </p>  
                <p>tengo { this.state.status } novios :3 </p>  
                <button onClick = {this.subirEdad.bind(this) }> sube la edad </button>     
            </div>
        );
    }

}
    
    
Home.propTypes = {
    age: PropTypes.number,
    status: PropTypes.number,
}