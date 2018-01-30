import * as React from "react"
import * as ReactDOM from "react-dom"

const logo = require("./images/parcel.png")

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <h1>
                <img width="500" src={logo} />
                <h1>Hello, world!</h1>
            </h1>
        );
    }
}

var app = document.getElementById("app")
ReactDOM.render(<App />, app)