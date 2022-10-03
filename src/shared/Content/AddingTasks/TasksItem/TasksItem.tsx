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
    const [minutsTime, setMinutsTime] = useState(0)
    const tasks: any = useSelector<RootState>(state => state.tasks)

    useEffect(() => {
        let countTime = 0
        tasks.map((i:any) => countTime += i.time)
        setTimeTask(countTime)
        setHoursTime(Math.floor(countTime / 60))

        if (countTime > 60) {
            const time = (countTime / 60).toString()
            const minuts = time.slice(2, 4)
            setMinutsTime(Math.ceil(+('0.'+ minuts) * 60))
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
                        : minutsTime === 0 ? <>{hoursTime} ч</> : <>{hoursTime} ч {minutsTime} мин</>
                }
            </div>
        </div>
    );
}
