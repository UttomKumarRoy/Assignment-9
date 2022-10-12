import React from 'react';

const Option = (props) => {
    const [id, option,correctAnswer]=props.data;
    return (
        <div>
            
            <label   className='radio' >  <input  onClick={() => option===correctAnswer?alert('Right Answer'):alert('Wrong Answer')} type="radio"  name={id} /> {option}</label>
            <br/> 
        </div>
    );
};

export default Option;