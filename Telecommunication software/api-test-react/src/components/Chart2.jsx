import React, { Component } from 'react';
import * as d3 from 'd3';
import { render } from '@testing-library/react';

class Chart2 extends Component {


    constructor(props){
        super(props)
        
        this.myRef = React.createRef();
    }

    componentDidMount () {
    const scores = this.props.scores;
    //const data = [22,70,150];
    const data = [scores.a,scores.b,scores.c];


    const w = 400;
    const h = 300;
    console.log(this.scores);
    console.log(this.props);
    const accessToRef = d3.select(this.myRef.current)
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .style("background-color", "#fcf3f3")
        .style("padding", 15)
        .style("margin-left", 50);

    accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d,i) => i *150)
        .attr("y", (d,i) => (h-d*1.5))
        .attr("width", 80)
        .attr("height", (d,i) => d*1.5)
        .attr("fill", (d,i) => d > 35 ? "green" : "yellow");
    }

    render() {
        return <div key='scores' ref={this.myRef}><h1>{Chart2.scores}</h1></div>
    };
}
export default Chart2;