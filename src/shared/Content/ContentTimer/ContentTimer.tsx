import React from 'react';
import './contenttimer.css';
import {IconAddTime} from "../../../icons/IconAddTime";

export function ContentTimer() {
  return (
      <div className='timer-container'>
          <div className='timer-content'>
              <div className='timer-content-header'>
                  <div>Сверстать сайт</div>
                  <span>Помидор 1</span>
              </div>
              <div className='timer-content-timer-container'>
                  <div className='timer'><span>25:00</span><IconAddTime /></div>
              </div>
          </div>
      </div>
  );
}
