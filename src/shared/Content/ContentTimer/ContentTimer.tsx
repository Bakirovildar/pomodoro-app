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
                  <div className='timer'>
                      <span>25:00</span>
                      <IconAddTime />
                  </div>
                  <div className='timer-description'>
                      <div>Задача 1 -</div>
                      <span>Сверстать сайт</span>
                  </div>
                  <div className='timer-btns'>
                      <div className='btn-start'>Старт</div>
                      <div className='btn-stop'>Стоп</div>
                  </div>
              </div>
          </div>
      </div>
  );
}
