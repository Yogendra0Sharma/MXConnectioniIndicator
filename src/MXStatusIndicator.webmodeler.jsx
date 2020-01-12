import { Component, createElement } from "react";
import "status-indicator/styles.css";
export class preview extends Component {
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

export function getPreviewCss() {
    return require("./ui/MXStatusIndicator.css");
}
