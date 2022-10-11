import React from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = (props) => {
    const correctAnswer=props.data;
    const notify = () => toast(`Correct Answer:${correctAnswer}`);
    return (
        <div>
             <button className='btn btn-primary' onClick={notify}><BsEyeSlash /></button>
             <ToastContainer position='top-center'/> 
        </div>
    );
};

export default Toast;