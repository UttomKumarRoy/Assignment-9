import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
   const loaderData=useLoaderData().data;
   const data = [];
   
   loaderData.map(subject=>{ return data.push({name:subject.name,total:subject.total})})

    return (
        <div> <br />
              <h3 className='text-center bg-secondary text-white rounded-5 p-2'>This chart shows Subject vs Total quiz </h3> <br /> <br />
              <ResponsiveContainer width="80%" height={400}>
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