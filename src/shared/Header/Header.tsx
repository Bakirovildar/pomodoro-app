import React from 'react';
import "./header.css";
import {IconPomodoro} from "../../icons/IconPomodoro";
import {IconStatic} from "../../icons/IconStatic";
import {Link} from "react-router-dom";

export function Header() {
  return (
      <header>
          <div className='header'>
              <div className='header-description'>
                  <Link to={'/tasks'} className='header-description-flex'>
                      <IconPomodoro />
                      <span>pomodoro_box</span>
                  </Link>
              </div>
              <Link to={'/static'} className='header-static'>
                  <IconStatic />
                  <span>Статистика</span>
              </Link>
          </div>
      </header>
  );
}
