import React  from "react";
import ReactDom from "react-dom";

const ele = React.createElement('div',null,"Hello React");

ReactDom.render(ele,document.querySelector("#root"));

// document.querySelector("body").innerHTML = "123123";