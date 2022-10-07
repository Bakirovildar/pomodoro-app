import React, {useState} from 'react';
import './statisticheader.css';
import {IconDown} from "../../../../../icons/IconDown";
import {IconUp} from "../../../../../icons/IconUp";
import {useDispatch} from "react-redux";
import {dropdownNumber} from "../../../../../store/action";

export function StatisticHeader() {
    const [isSelect, setIsSelect] = useState(false)

    const dispatch = useDispatch()

    const arr = ['Прошедшая неделя', 'Две недели назад']

    const handleClickDropdown = (idx: number) => {
        dispatch(dropdownNumber(idx))
        setIsSelect(!isSelect)
    }

    return (
        <div className='statistics-content-header'>
            <span className='statistics-header-title'>Ваша активность</span>
            <div className='statistics-header-select-container'>
                <div
                    onClick={() => handleClickDropdown(0)}
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
                                onClick={() => handleClickDropdown(idx +1)}
                                className='statistics-header-dropdown'>
                            <span>{i}</span>
                        </div>)
                        : ''
                }

            </div>
        </div>
    );
}
