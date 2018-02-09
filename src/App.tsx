import * as React from "react"
import * as ReactDOM from "react-dom"

const logo = require("./images/parcel.png")

type State = {
    count: number
}

export class App extends React.Component<{}, State> {
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

let render = App => {
    var element = document.getElementById("app")
    ReactDOM.render(<App />, element);
}

render(App);

/*
declare var module: any;

if (module.hot) {
    console.log("hot")
    module.hot.dispose(function () {
        console.log("dispose")
        // module is about to be replaced
    });

    module.hot.accept(() => {
        // module or one of its dependencies was just updated
    });
}*/