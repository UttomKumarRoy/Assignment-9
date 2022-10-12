import React from 'react';

const Blog = () => {
    return (
        <div> <br />
            <h2 className='text-white text-center bg-success rounded-5 p-3'>Please read this blog</h2> <br /> <br />
             <div className='bg-dark text-white p-2 rounded-3'>
                <h3>1. What is the purpose of React Router?</h3>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>2. How does context api work?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>3. Explain useRef Hook?</h3>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div> <br />
        </div>
    );
};

export default Blog;