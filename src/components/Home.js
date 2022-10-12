import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Home.css';
const Home = () => {
    const loaderData= useLoaderData();
    const courses=loaderData.data;
    return (
        <div> <br /> <br />
            <div style={{width:"100vw", height:"10vh"}}>
            <h3 className='bgImg text-white text-center pt-4'>Hey! Welcome to our quiz quiz game.</h3>
            </div> <br /> <br /> <br /> <br />
            <div className='row'>
                {courses.map(course=><Course key={course.id} data={course}></Course>)}
            </div>
        </div>
    );
};

export default Home;