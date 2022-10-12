import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

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
        <div>
    
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
        
           
        </div>
    );
};

export default Statistics;