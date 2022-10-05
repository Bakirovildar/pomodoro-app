import React, {useState} from 'react';
import './statisticheader.css';
import {IconDown} from "../../../../../icons/IconDown";
import {IconUp} from "../../../../../icons/IconUp";

export function StatisticHeader() {
    const [isSelect, setIsSelect] = useState(false)

    const arr = ['Прошедшая неделя', 'Две недели назад']

    return (
        <div className='statistics-content-header'>
            <span className='statistics-header-title'>Ваша активность</span>
            <div>
                <div
                    onClick={() => setIsSelect(!isSelect)}
                    className='statistics-header-select'>
                    <span>Эта неделя</span>
                    {
                        isSelect
                            ? <IconUp/>
                            : <IconDown/>
                    }
                </div>
                {
                    isSelect
                        ? arr.map((i, idx) =>
                            <div
                                key={idx}
                                className='statistics-header-dropdown'>
                            <span>{i}</span>
                        </div>)
                        : ''
                }

            </div>
        </div>
    );
}
