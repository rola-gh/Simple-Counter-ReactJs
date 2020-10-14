import React, { Component } from "react";
import { faPlusCircle , faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from '../style/style.css'

class Counter extends Component {
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
    render() {
        return (
            <div className="row">
                <button className="btn-zero">
                    <span >{this.formatCount()}</span>
                </button>

                <button onClick={() => this.props.onIncrement(this.props.counter)}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value===0?"Disables":""}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>

            </div>
        );
    }

}

export default Counter;
