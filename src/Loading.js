// import React, { useState, useEffect } from 'react';
import React from 'react';
import HashLoader from "react-spinners/HashLoader";
// import Tour from './Tour';
const Loading = ({loading}) => {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   },3750)
  // }, [])
  return (
    <main className="loading">
      {
          < HashLoader  size ={300} color ={"#16B6C2"} loading={loading} />
      }
    </main>
  );
};

export default Loading;
