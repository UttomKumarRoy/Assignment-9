import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h1 className='text-primary'>Quiz Quiz Game</h1>
            </div>
            <div className='d-flex gap-3'>
            <Link className='text-decoration-none' to="/">Home</Link>
            <Link className='text-decoration-none' to="/statistics">Statistics</Link>
            <Link className='text-decoration-none' to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;