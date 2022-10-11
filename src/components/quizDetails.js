import React from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import Option from './Option';
const QuizDetails = (props) => {
    console.log(props);
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
                <p onClick={() => {alert(correctAnswer)}}> <BsEyeSlash /></p>
            </div>
            <br />
            <div>  
               {
                options.map(option => <Option data={[id,option,correctAnswer]} />)
               }
            </div>
            <br />
            <br />
            </li>
        </div>
    );
};

export default QuizDetails;