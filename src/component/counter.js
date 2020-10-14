import React, { Component } from "react";
import { faPlusCircle , faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line no-unused-vars
import Style from '../style/style.css'

class Counter extends Component {
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
    // formatCount() {
    //     const { value } = this.props.counter;
    //     if(value === 0){
    //         this.setState({activeClass:'test1'})
    //             return "Zero"
    //         }else{
    //             this.setState({activeClass:'test2'})
    //                 return value
    //         }}
    render() {
        return (
            <div className="row">
                <button className="btn-zero">
                    <span>{this.formatCount()}</span>
                </button>

                <button onClick={() => this.props.onIncrement(this.props.counter)} className={'plus'}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <button className='minus' onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value===0?"Disables":""}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>

            </div>
        );
    }

}

export default Counter;
