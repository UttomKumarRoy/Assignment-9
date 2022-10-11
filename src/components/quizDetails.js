import React from 'react';

const QuizDetails = (props) => {
    console.log(props);
    const {question, id, options, correctAnswer}=props.data;
    return (
        <div>
            <div>{question}</div>
            <br />
            <div>{id}</div>
            <div>{options.map(option  => <btn className="form-check-input mt-0" type="checkbox">{option}</btn>)}</div>
            <div>{correctAnswer}</div>
            <br />
            <br />
        </div>
    );
};

export default QuizDetails;