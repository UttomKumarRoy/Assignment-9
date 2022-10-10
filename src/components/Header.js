import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h1>Quiz Quiz Game</h1>
            </div>
            <div className='d-flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/quiz">Quiz</Link> 
            </div>
            

        </div>
    );
};

export default Header;