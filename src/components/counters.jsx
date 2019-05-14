import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 

        console.log('2.1. Counters Render method is called...');
        const { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <React.Fragment>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}> Reset Counter </button>
                { counters.map ( counter => 
                        <Counter key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}>
                        </Counter>
                    ) 
                }
            </React.Fragment> 
        );
    }
}
 
export default Counters;