import React, { useEffect, useState } from "react";

const Datetime = () => {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Extract date and time separately
  const date = datetime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const time = datetime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-white shadow-lg w-fit">
        <h2 className="text-sm font-semibold">{date}</h2>
        <h1 className="text-2xl font-bold tracking-wide">{time}</h1>
      </div>
  );
};

export default Datetime;
