import React, { Component, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { render } from '@testing-library/react';

const Chart = (props) => {
    const {scores} = props
    const ref = useRef()


    const w = 400;
    const h = 300;
    useEffect(() => {
        if(scores){
            var dlist = Object.entries(scores);

            var y = d3.scaleLinear().domain([0,125]).range([h-40,0]);
            var yAxis = d3.axisLeft(y).ticks(10);

            const svg = d3.select(ref.current)
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black")
            .style("background-color", "#fcf3f3")
            .style("padding", 15)
            .style("margin-left", 50);

            svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(25, 30 )")
            .call(yAxis);

            var barchart = svg
            .selectAll()
            .data(Object.entries(scores))
            .enter()
            .append('g')

            barchart
            .append("rect")
            .attr('class', 'bar')
            .attr("transform", "translate(50, 0 )")
            .attr("x", ([k,v],i) => i *130)
            .attr("y", ([k,v],i) => h-v*2-10)
            .attr("width", 80)
            .attr("height", ([k,v])=> v*2)
            .attr("fill", ([k,v]) => k=='a'?'blue':k=='b'?'darkturquoise':'green');


            barchart
            .append('text')
            .attr("transform", "translate(50, 30 )")
            .style("fill", "white")
            .style("font-size", '30px')
            .attr("height", 200)
            .attr("width", 200)
            .attr('x', (d,i) => i*130+30)
            .attr('y', ([k,v]) => h-v*2)
            .text(([k,v])=> k);





            console.log(Object.entries(scores));

        }

    }, [scores])



    return (
        <div className="chart">
            <svg ref={ref}></svg>
        </div>
    );
};

export default Chart;