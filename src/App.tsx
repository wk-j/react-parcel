import * as React from "react"
import * as ReactDOM from "react-dom"

const logo = require("./images/parcel.png")

type State = {
    count: number
}

type Props = {
    title: string
}
export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    add = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <img width="500" src={logo} />
                <h1 onClick={this.add}>Hello, world! {this.state.count}</h1>
            </div>
        );
    }
}

var element = document.getElementById("app")
ReactDOM.render(<App title="Hello, world!" />, element);
