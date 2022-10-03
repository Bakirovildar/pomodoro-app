import React, {ChangeEvent, useEffect, useState} from 'react';
import './tasksitem.css';
import {Dropdown} from "../../../Dropdown";
import {IconDropdown} from "../../../../icons/IconDropdownButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {editValueTask} from "../../../../store/action";

interface ITasks {
    id: string,
    valueTask: string
}

export function TasksItem() {
    const [timeTask, setTimeTask]: any = useState(0)
    const [hoursTime, setHoursTime] = useState(0)
    const [minutesTime, setMinutesTime] = useState(0)
    const [idTask, setIdTask] = useState('')

    const dispatch = useDispatch()

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

    const clickEditItem = (id: any) => {
        setIdTask(id)
    }

    const handleChangeEdit = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(editValueTask(event.target.value, idTask))
    }

    return (
        <div>
            {
                tasks.map(({id, valueTask}: ITasks, idx: number) => {
                    return (
                        <div
                            className='tasks-item-container'
                            key={id}
                        >
                            <div className='tasks-item-desc'>
                                <div className='tasks-item-num'>{idx + 1}</div>
                                {
                                    id === idTask
                                        ? <input
                                            className='inpt-edit'
                                            value={valueTask}
                                            onChange={handleChangeEdit}
                                            type="text"/>
                                        : <span>{ valueTask }</span>
                                }
                            </div>
                            <Dropdown button={<IconDropdown/>} id={id} clickEditItem={clickEditItem}/>
                        </div>
                    )
                })
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
