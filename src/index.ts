import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./App";

const element = createElement(App);
const container = document.getElementById("root");

render(element, container);
