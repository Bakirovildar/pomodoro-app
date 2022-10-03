import React, {useEffect, useState} from 'react';
import './tasksitem.css';
import {Dropdown} from "../../../Dropdown";
import {IconDropdown} from "../../../../icons/IconDropdownButton";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";

interface ITasks {
    id: string,
    valueTask: string
}

export function TasksItem() {
    const [timeTask, setTimeTask]: any = useState(0)
    const [hoursTime, setHoursTime] = useState(0)
    const [minutesTime, setMinutesTime] = useState(0)
    const tasks: any = useSelector<RootState>(state => state.tasks)

    useEffect(() => {
        let countTime = 0
        tasks.map((i:any) => countTime += i.time)
        setTimeTask(countTime)
        const hours = Math.floor(countTime / 60)
        setHoursTime(hours)

        if (countTime > 60) {
            const time = (countTime / 60).toString()
            const minutes = time.slice(2, 4)
            const ceilMinutes = Math.ceil(+('0.'+ minutes) * 60)
            setMinutesTime(ceilMinutes)
        }
    }, [tasks])

    return (
        <div>
            {
                tasks.map(({id, valueTask}: ITasks, idx: number) => (
                    <div
                        className='tasks-item-container'
                        key={id}
                    >
                        <div className='tasks-item-desc'>
                            <div className='tasks-item-num'>{idx + 1}</div>
                            <span>{ valueTask }</span>
                        </div>
                        <Dropdown button={<IconDropdown/>} id={id}/>
                    </div>
                ))
            }
            <div className='sumTime'>
                {
                    timeTask < 60
                        ? <>{timeTask} мин</>
                        : minutesTime === 0 ? <>{hoursTime} ч</> : <>{hoursTime} ч {minutesTime} мин</>
                }
            </div>
        </div>
    );
}
