import React, { Component } from 'react';


//Define a functional interface as this class do not have any methods or state
//props will not work in functional interface, so we need to pass the props object to it
//At runtime react will take care of it.
const NavBar = ({ totalCounters }) => {
    console.log('2.2 NavBar Render method is called...');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Total Counts : <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};

/* class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Total Counts : <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
         );
    }
} */
 
export default NavBar;