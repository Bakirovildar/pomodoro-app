import React from 'react';
import './statisticcontent.css';
import {IconPomodoro} from "../../../../../icons/IconPomodoro";
import {StatisticGraphic} from "./StatisticGraphic";
import {StatisticFooter} from "./StatisticFooter";

export function StatisticContent() {
    return (
        <>
            <div className='statistic-content'>

                <div className='statistic-left'>
                    <div className='statistic-day'>
                        <span>Понедельник</span>
                        <div className='statistic-day-description'>
                            Вы работали над задачами в течение
                        </div>
                    </div>

                    <div className='statistic-pomodoro'>
                        <div className='statistic-pomodoro-content'>
                            <IconPomodoro size={80}/>
                            <span>x2</span>
                        </div>
                        <div className='statistic-pomodoro-footer'>
                            2 помидора
                        </div>
                    </div>
                </div>

                <StatisticGraphic/>
            </div>
            <StatisticFooter/>
        </>
    );
}
