import React from 'react';
import './statistics.css';
import {StatisticHeader} from "./StatisticHeader/StatisticHeader";
import {StatisticContent} from "./StatisticContent";

export function Statistics() {
  return (
      <div className='statistics-content-container'>
          <StatisticHeader/>
          <StatisticContent/>
      </div>
  );
}
