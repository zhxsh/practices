import React  from "react";
import ReactDom from "react-dom";

import Main from './src/views/main';

const ele = React.createElement('div',null,"Hello React");

class Main2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'john',
            age: 18
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}


ReactDom.render(<Main2 />,document.querySelector("#root"));
// ReactDom.render(ele,document.querySelector("#root"));

// document.querySelector("body").innerHTML = "123123";