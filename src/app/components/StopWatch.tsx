import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { InProgressChildProps } from '../../../types';


const Stopwatch: React.FC<InProgressChildProps> = ({inProgress}) => {
  const [time, setTime] = useState<number>(0); // time in milliseconds
  
  // useEffect to handle the interval for updating time
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (inProgress) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10); // update time every 10 milliseconds
      }, 10);
    } else if (!inProgress && time !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!); // Cleanup interval on unmount
  }, [inProgress, time]);


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <Box>
      <h2 className="text-black text-2xl">{formatTime(time)}</h2>
    </Box>
  );
  
};

export default Stopwatch;
