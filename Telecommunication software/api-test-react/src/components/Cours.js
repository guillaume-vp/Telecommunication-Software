import React, {useState,useEffect} from 'react';
import axios from "axios";
import Chart2 from './Chart2';
import Chart from './Chart';

const Cours = () => {

const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://4v9r83qfo4.execute-api.eu-central-1.amazonaws.com/dev")
        .then((res) => {setData(res.data);}
        );
        //console.log(typeof data.scores)
    }, [])


    const DateFormat = (date) =>{
        const dateS = date.toString();
        return dateS[6] + dateS[7] + "-" + dateS[4] +dateS[5] + "-" + dateS[0] +dateS[1] + dateS[2] +dateS[3];
    }

    return (
        <div className="cours">
            <h2>{data.courseName}</h2>
            <div className="description">
                <ul>
                    <li>Course n°{data.course}</li>
                    <li>Year : {data.releaseYear}</li>
                    <li>Date : {data.date && DateFormat(data.date)}</li>
                    <li>{data.scores ? data.scores.a:''}</li>
                </ul>
                <Chart scores={data.scores ? data.scores:[]} key='scores'/>

            </div>


        </div>
    );
};

export default Cours;