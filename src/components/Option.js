import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = (props) => {
    const [id, option,correctAnswer]=props.data;
    const notify = (option) => {
        (option===correctAnswer)?toast(`Right Answer`):toast(`Wrong Answer`)
    };

    return (
        <div>
            <label   className='radio' >  <input  onClick={()=>notify(`${option}`)} type="radio"  name={id} /> {option}</label>
            <br/>
        </div>
    );
};

export default Option;