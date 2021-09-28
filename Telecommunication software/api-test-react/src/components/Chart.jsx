import React, { Component, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { render } from '@testing-library/react';

const Chart = (props) => {
    const {scores} = props
    const ref = useRef()
    const [data, setData] = useState([20,80,150]);
    //const data = [20,160,80]; 
    //const data = [scores.a,scores.b,scores.c]; 


    const w = 400;
    const h = 300;
    useEffect(() => {
        
        if(scores.a)
        {
            console.log('in');
            console.log([scores.a,scores.b,scores.c]);
            setData([scores.a,scores.b,scores.c]);
            console.log(data)
            const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black")
            .style("background-color", "#fcf3f3")
            .style("padding", 15)
            .style("margin-left", 50);

            svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i *150)
            .attr("y", (d,i) => h-d)
            .attr("width", 80)
            .attr("height", (d,i) => d*1.5)
            .attr("fill", (d,i) => d > 35 ? "green" : "yellow");


        }

    }, [scores])



    return (
        <div className="chart">
            <ul className='score_chart'>
                <li>{scores.a}</li>
                <li>{scores.b}</li>
                <li>{scores.c}</li>
            </ul>
            <svg ref={ref}></svg>
        </div>
    );
};

export default Chart;