import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {id,name, logo, total}=props.data;
    return (
        <div>
            
            <div className='card' style={{width: "18rem"}}>
                 <img src={logo} className="card-img-top" alt="course img" />
                <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Total Quiz:{total}</p>
                        <Link to={`../quiz/${id}`} className="btn btn-primary">Start Practice</Link>
                </div>
            </div>

        </div>
    );
};

export default Course;