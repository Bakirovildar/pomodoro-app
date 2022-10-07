import React, {useEffect, useState} from 'react';
import './statisticcontent.css';
import {IconPomodoro} from "../../../../../icons/IconPomodoro";
import {StatisticGraphic} from "./StatisticGraphic";
import {StatisticFooter} from "./StatisticFooter";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/store";

export function StatisticContent() {
    const countPomodoro: any = useSelector<RootState>(state => state.countPomodoro)
    const countWork: any = useSelector<RootState>(state => state.countWork)

    const [timeTask, setTimeTask] = useState(0)
    const [hoursTime, setHoursTime] = useState(0)
    const [minutesTime, setMinutesTime] = useState(0)

    useEffect(() => {
        const countTime = countWork
        setTimeTask(countTime)
        const hours = Math.floor(countTime / 3600)
        setHoursTime(hours)

        if (countTime > 60) {
            const time = (countTime / 3600).toString()
            const minutes = time.slice(2, 4)
            const ceilMinutes = Math.ceil(+('0.' + minutes) * 60)
            setMinutesTime(ceilMinutes)
        }
    }, [countWork])

    return (
        <>
            <div className='statistic-content'>

                <div className='statistic-left'>
                    <div className='statistic-day'>
                        <span>Понедельник</span>
                        <div className='statistic-day-description'>
                            Вы работали над задачами в течение
                            {
                                timeTask < 60
                                    ? <div>{timeTask} мин</div>
                                    : minutesTime === 0 ? <div>{hoursTime} ч</div> : <div>{hoursTime} ч {!minutesTime ? 0 : minutesTime} мин</div>
                            }
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
