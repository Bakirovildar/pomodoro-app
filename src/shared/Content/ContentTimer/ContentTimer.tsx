import React, {useEffect, useState} from 'react';
import './contenttimer.css';
import {IconAddTime} from "../../../icons/IconAddTime";
import {getPadTime} from "../../../helpers/getPadTime";

export function ContentTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isCounting, setIsCounting] = useState(false)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
        if (timeLeft === 0) {
            setIsCounting(false)
        }
        return () => {
            clearInterval(interval)
        }
    }, [isCounting])

    const handleStart = () => {
        setIsCounting(true)
    }

    const handlePause = () => {
        setIsCounting(false)
    }

    const handleStop = () => {
        setTimeLeft(25 * 60)
        setIsCounting(false)
    }

    return (
        <div className='timer-container'>
            <div className='timer-content'>
                <div className='timer-content-header'>
                    <div>Сверстать сайт</div>
                    <span>Помидор 1</span>
                </div>
                <div className='timer-content-timer-container'>
                    <div className='timer'>
                        <span>{minutes}: {seconds}</span>
                        <div
                            className='timer-content-add'
                            onClick={() => setTimeLeft(timeLeft + 60)}
                        >
                            <IconAddTime/>
                        </div>
                    </div>
                    <div className='timer-description'>
                        <div>Задача 1 -</div>
                        <span>Сверстать сайт</span>
                    </div>
                    <div className='timer-btns'>
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
                        <div
                            className='btn-stop'
                            onClick={handleStop}
                        >Стоп
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
