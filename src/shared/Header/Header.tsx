import React from 'react';
import "./header.css";
import {IconPomodoro} from "../../icons/IconPomodoro";
import {IconStatic} from "../../icons/IconStatic";

export function Header() {
  return (
      <header>
          <div className='header'>
              <div className='header-description'>
                  <div className='header-description-flex'>
                      <IconPomodoro />
                      <span>pomodoro_box</span>
                  </div>
              </div>
              <div className='header-static'>
                  <IconStatic />
                  <span>Статистика</span>
              </div>
          </div>
      </header>
  );
}
