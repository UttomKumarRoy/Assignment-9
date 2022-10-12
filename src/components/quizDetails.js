import React from 'react';
import Option from './Option';
import Toast from './Toast';
const QuizDetails = (props) => {
    const {question, id, options, correctAnswer}=props.data;
    function removeTags(str){
        if((str===null) || (str===''))
         return false;
        else
        str=str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    const newQuestion=removeTags(question);
    return (
        <div className='border text-info'>
            <li>
            <div className='d-flex justify-content-between'>
                <p>{newQuestion}</p>
                <div><Toast data={correctAnswer}></Toast></div>
            </div>
            <div>  
               {
                options.map((option, index) => <Option key={index} data={[id,option,correctAnswer]} />)
               }
            </div>
            <br />
            </li>
        </div>
    );
};

export default QuizDetails;