import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
   
   

    const data = [
        {
            name: "React",
            total: 8
        },
        {
            name: "JavaScript",
            total: 9
        },
        {
            name: "CSS",
            total: 8
        },
        {
            name: "Git",
            total: 11
        }
    ];

    return (
        <div> <br />
              <h3 className='text-center bg-secondary text-white rounded-5 p-2'>This chart shows Subject vs Total quiz </h3> <br /> <br />
              <ResponsiveContainer >
                <LineChart  width={300} height={300} data={data}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                </LineChart>
              </ResponsiveContainer>
                
        
           
        </div>
    );
};

export default Statistics;