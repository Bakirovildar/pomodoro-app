import React from 'react';
import './statisticcontent.css';
import {IconPomodoro} from "../../../../../icons/IconPomodoro";
import {StatisticGraphic} from "./StatisticGraphic";
import {StatisticFooter} from "./StatisticFooter";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/store";

export function StatisticContent() {
    const countPomodoro: any = useSelector<RootState>(state => state.countPomodoro)

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
                            <span>x{countPomodoro}</span>
                        </div>
                        <div className='statistic-pomodoro-footer'>
                            {countPomodoro} помидора
                        </div>
                    </div>
                </div>

                <StatisticGraphic/>
            </div>
            <StatisticFooter/>
        </>
    );
}
