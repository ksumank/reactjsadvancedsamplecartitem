import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('4.2.1 Component did update method is called...');
        console.log('\n PreviousProps : ' + prevProps + '\nPrevState : ' + prevState);

        //Here we can compare and if there is a change in the props value then make a db call to get the value/ update the value
        if(prevProps.counter.value !== this.props.value) {
            console.log('4.2.2 Counter update the component did mount method is updated...');
        }
    }

    componentWillUnmount() {
        console.log('5.2.1 Counters Counter component will unmount method is called...');
    }

    //To format the value for display
    formatCount = () => {
        const { value } = this.props.counter;
        //return count === 0 ? <h4>Zero</h4> : count;
        return value === 0 ? "Zero" : value;
    };

    badgeClass = () => {
        let dynamicBadgeClass = "badge m-2 badge-";
        dynamicBadgeClass += this.props.counter.value === 0 ? "warning" : "primary";
        return dynamicBadgeClass;
    };

    render() {
        //console.log(this.props);
        console.log('2.2.1 Counters Counter Render method is called...');
        return (
            <div>
                <span className={this.badgeClass()}>{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {this.props.onIncrement(this.props.counter)}}>
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => {this.props.onDecrement(this.props.counter)}}>
                    Decrement
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => { this.props.onDelete(this.props.counter.id) }} >
                    Delete
                    </button>
            </div>
        );

    }
}
 
export default Counter;