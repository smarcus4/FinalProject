import React from "react";

const surveyFormat = (props) => (

    <div className="card">

        <div >
            <img width="120px" alt="some image" src={props.image} />
        </div>

        <ul>
            <li>Name: {props.name}</li>
            <li>question: {props.question}</li>
            <li>Answers: {props.answers}</li>
        </ul>

    </div>

);

export default surveyFormat;

