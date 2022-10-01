import React, {ChangeEvent, FormEvent, useState} from 'react';
import './addform.css'
import {v4 as uuid4} from 'uuid'
import {addTask} from "../../../../store/action";
import {useDispatch} from "react-redux";

export function AddForm() {
    const [valueTask, setValueTask] = useState('')
    const dispatch = useDispatch()

    const addTaskHandle = (event: FormEvent) => {
        event.preventDefault()
        const newTask = {id: uuid4(), valueTask}
        console.log('task', newTask)
        dispatch(addTask(newTask))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueTask(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addTaskHandle}>
                <input
                    className='inpt'
                    type="text"
                    placeholder={'Название задачи'}
                    onChange={handleChange}
                />
                <button className='btn-add'>Добавить</button>
            </form>
        </div>
    );
}
