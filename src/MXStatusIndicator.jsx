import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import 'status-indicator/styles.css';

import "./ui/MXStatusIndicator.css";

class MXStatusIndicator extends Component {
    render() {
        if (this.props.statusNode.value) {
            return (<div>
                <status-indicator positive pulse></status-indicator>
                <span>Connected</span>
            </div>);
        } else {
            return (<div>
                <status-indicator negative pulse></status-indicator>
                <span>Disconnected</span>
            </div>);
        }
    }
}

export default hot(MXStatusIndicator);
