import { Component } from "react";
//import PropTypes from "prop-types";
import { defineDocumentTitle } from "../common/utility";

export default class IPage extends Component {
    constructor(props) {
        super(props);
        this.titleName = "";
        this.titleSeparator = " - ";
    }
    componentDidMount = () => {
        document.title = defineDocumentTitle(this.titleName, this.titleSeparator);
        this.afterComponentDidMount && this.afterComponentDidMount();
    };
}
