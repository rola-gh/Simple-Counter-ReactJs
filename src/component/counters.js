import React, { Component } from 'react';
import Counter from './counter';
import { faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/style.css'

class Counters extends Component {
    render() {

        const{onReset, counters, onIncrement, onDecrement} = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn-reset">
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />)}
            </div>
        );
    }
}

export default Counters;