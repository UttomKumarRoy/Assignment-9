import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const loaderData=useLoaderData();
    const quiz=loaderData.data;
    const {name, questions}=quiz
    return (
        <div>
            <h2>Quiz of {name}</h2>
            <div>
                <ol>
                {
                    questions.map(question => <QuizDetails key={question.id} data={question}></QuizDetails>)
                }
                </ol>
                
            </div>
        </div>
    );
};

export default Quiz;