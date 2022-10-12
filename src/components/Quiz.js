import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';

const Quiz = () => {
    const loaderData=useLoaderData();
    const quiz=loaderData.data;
    const {name, questions}=quiz
    return (
        <div> <br />
            <h2 className='text-center text-white bg-secondary rounded-5 p-3'>Quiz of {name}</h2> <br /> <br />
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