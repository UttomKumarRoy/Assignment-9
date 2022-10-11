import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import lq from './Iq.jpg';
const Home = () => {
    const loaderData= useLoaderData();
    const courses=loaderData.data;
    return (
        <div> 
            <div className='d-flex justify-content-between pt-4'>
            <h3>Hey! Welcome to our quiz quiz game. You can increase your knowledge by answering these questions.</h3>
            <img className='img-fluid' src={lq} alt="header" />
            </div>
            <div>{courses.map(course=><Course key={course.id} data={course}></Course>)}</div>
        </div>
    );
};

export default Home;