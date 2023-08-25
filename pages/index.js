'use client';
import React, { useRef, useState } from 'react';

const Home = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  //Write code here and edit as per your need

  return (
    <div id='main'>
      <section>
        <h1 className='seconds-elapsed'>{secondsElapsed.toFixed(3)}</h1>
        <section className='buttons'>
          <button className='start-btn'>START</button>
          <button className='stop-btn'>STOP</button>
          <button className='lap-btn'>LAP</button>
          <button className='reset-btn'>RESET</button>
        </section>
      </section>
      {laps?.length ? (
        <section className='lap-section'>
          <h2>Laps</h2>
          <section className='laps'>
            {laps.map((lap) => (
              <p key={lap}>{lap}</p>
            ))}
          </section>
        </section>
      ) : null}
    </div>
  );
};

export default Home;
