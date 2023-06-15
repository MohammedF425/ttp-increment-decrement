import React, {Component, ReactPropTypes} from 'react';

class IncrementDecrement extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            number: this.props.number

        }
    };


    //increment count by 1
    increment = (e) => {
        //can not directly mutate state
        this.setState({
            number: this.state.number + 1
        })

    }

    //decrements count by 1 if its 0>
    decrement = (e) => {
        if(this.state.number>0){
            this.setState({
                number: this.state.number - 1
            })
        }
        else{
            alert("Cannot be less than 0");
        }

    }


    render(){
        return(
            <div>
                <h1 className="counter-header">Counter</h1>
                <h3>{this.state.number}</h3>

                <button className='Increment button' onClick={this.increment}>+</button>
                <button className='Decrement button' onClick={this.decrement}>-</button>

            </div>
        )
    };
}

export default IncrementDecrement;