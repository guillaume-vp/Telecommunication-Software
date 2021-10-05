import React, { Component, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { render } from '@testing-library/react';

const Plot = ({someData}) => {

    const ref = useRef();
    const w = 360;
    const h = 260;

    useEffect(() => {
        if(someData){


            let line_log = d3.line()
            .x(d => d[0]*((w+1)/51))
            .y(d => h-d[1]*((h+1)/6));

            var dlist = Object.entries(someData);
            const svg = d3.select(ref.current)
            .attr("width", w+40)
            .attr("height",h+40)
            .style("border", "1px solid black")
            .style("background-color", "#fcf3f3")
            .style("margin-left", 50)
            .style("padding","15")
            .append('g');

            var x = d3.scaleLinear().domain([0,50]).range([0, w]);
            var y = d3.scaleLinear().domain([0,5]).range([h,0]);

            // Define the axes
            var xAxis = d3.axisBottom(x).ticks(5);

            var yAxis = d3.axisLeft(y).ticks(5);

            svg
            .append('path')
            .style("stroke", "red")  
            .style("stroke-width", 7)
            .style("fill","none")
            .attr('d',line_log(someData));

            svg.selectAll("dot")
            .data(someData)
            .enter()
            .append("circle")
            .attr("r", 7)
            .attr("cx", (d) => d[0]*(w/51))
            .attr("cy", (d) => h-d[1]*(h/6) );

            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(20," + (h+20)  + ")")
                .call(xAxis);

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(20, 20 )")
                .call(yAxis);



            console.log(someData);

        }

    }, [someData])

    return (
        <div className='plot'>
            <svg ref={ref}></svg>
        </div>
    );
};

export default Plot;