import React, {useEffect, useState} from 'react';
import './contenttimer.css';
import {IconAddTime} from "../../../icons/IconAddTime";
import {getPadTime} from "../../../helpers/getPadTime";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addPlusCountTime} from "../../../store/action";

export function ContentTimer() {
    const [timeLeft, setTimeLeft] = useState(20 * 60)
    const [timeWork, setTimeWork] = useState(0)
    const [isCounting, setIsCounting] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const [task, setTask]: any = useState(null)

    const dispatch = useDispatch()
    const tasks: any = useSelector<RootState>(state => state.tasks)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        setTask(tasks[0])
        if (!task) return

        setTimeLeft(task.time * 60)

    }, [tasks, task])

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if (timeLeft === 0) {
            setIsCounting(false)
        }

        if (!task) return
        setTimeWork(task.time * 60 - timeLeft)

        return () => {
            clearInterval(interval)
        }
    }, [isCounting, tasks, task, isPause])

    const handleStart = () => {
        setIsCounting(true)
        setIsPause(false)
    }

    const handlePause = () => {
        setIsCounting(false)
        setIsPause(true)
    }

    const handleStop = () => {
        setTimeout(() => {
            setTimeLeft(task.time * 60)
        }, 200)
        setIsCounting(false)
        setIsPause(true)
    }

    const handleTimePlus = () => {
        if (task.id) {
            dispatch(addPlusCountTime(task.id))
        }
    }

    const handleMade = () => {
        console.log('s')
    }

    const styleTime = () => {
        if (isCounting) {
            return 'timer-content-header-isCounting'
        } else if (isPause) {
            return 'timer-content-header-isPause'
        } else {
            return 'timer-content-header'
        }
    }

    return (
        <div className='timer-container'>
            <div className='timer-content'>
                <div className={styleTime()}>
                    {
                        !task
                            ? <div>Создайте задачу</div>
                            : <div>{task.valueTask}</div>
                    }
                    <span>Помидор 1</span>
                </div>
                <div className='timer-content-timer-container'>
                    <div className={isCounting ? 'timer-active' : 'timer'}>
                        <span>{minutes}: {seconds}</span>
                        <div
                            className='timer-content-add'
                            onClick={handleTimePlus}
                        >
                            <IconAddTime/>
                        </div>
                    </div>
                    <div className='timer-description'>
                        {
                            !task
                                ? <span>Создайте задачу</span>
                                : <>
                                    <div>Задача 1 -</div>
                                    <span>{task.valueTask}</span></>
                        }
                    </div>
                    {
                        !isPause
                            ? <div className='timer-btns'>
                                {
                                    isCounting
                                        ? <div
                                            className='btn-start'
                                            onClick={handlePause}
                                        >Пауза</div>
                                        : <div
                                            className='btn-start'
                                            onClick={handleStart}
                                        >Старт</div>
                                }
                                {
                                    isCounting
                                        ? <div
                                            className='btn-stop-counting'
                                            onClick={handleStop}
                                        >Стоп
                                        </div>
                                        : <div
                                            className='btn-stop'
                                            onClick={handleStop}
                                        >Стоп
                                        </div>
                                }
                            </div>
                            : <div className='timer-btns'>
                                <div
                                    className='btn-start'
                                    onClick={handleStart}
                                >Продолжить
                                </div>

                                <div
                                    className='btn-end'
                                    onClick={handleMade}
                                >Сделано
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}
