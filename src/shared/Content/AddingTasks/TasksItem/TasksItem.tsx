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
    const tasks: any = useSelector<RootState>(state => state.tasks)

    useEffect(() => {
        tasks.map(({time}: {time: number}) => setTimeTask(timeTask + time))
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
                    timeTask
                } мин
            </div>
        </div>
    );
}
