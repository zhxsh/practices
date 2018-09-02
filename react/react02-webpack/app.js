import react  from "react";
import { 'react-dom' } from "react-dom";

const ele = React.createElement('div',null,"Hello React");

ReactDom.render(ele,document.querySelector("#root"));