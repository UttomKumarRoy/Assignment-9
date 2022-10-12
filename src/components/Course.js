import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {id,name, logo, total}=props.data;
    return (
        <div className='col-sm-12 col-md-4'>
            
            <div className='card bg-info text-white' style={{width: "18rem"}}>
                 <img src={logo} className="card-img-top" alt="course img" />
                <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Total Quiz:{total}</p>
                        <Link to={`../quiz/${id}`} className="btn btn-primary">Start Quiz</Link>
                </div> 
            </div>
            <br /> <br />
        </div>
    );
};

export default Course;