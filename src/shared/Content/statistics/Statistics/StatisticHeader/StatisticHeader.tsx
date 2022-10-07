import React, {useEffect, useState} from 'react';
import './statisticheader.css';
import {IconDown} from "../../../../../icons/IconDown";
import {IconUp} from "../../../../../icons/IconUp";
import {useDispatch, useSelector} from "react-redux";
import {dropdownNumber} from "../../../../../store/action";
import {RootState} from "../../../../../store/store";

export function StatisticHeader() {
    const numberDropdown: any = useSelector<RootState>(state => state.dropdownNumber)
    const [isSelect, setIsSelect] = useState(false)
    const [title, setTitle] = useState('Эта неделя')

    const dispatch = useDispatch()

    useEffect(() => {
        setTitle(arr[numberDropdown - 1])
    }, [numberDropdown])

    const arr = ['Эта неделя','Прошедшая неделя', 'Две недели назад']

    const handleClickDropdown = (idx: number) => {
        dispatch(dropdownNumber(idx))
        setTitle(arr[idx-1])
        setIsSelect(!isSelect)
    }

    const handleClickSelect = () => {
        setIsSelect(!isSelect)
    }

    return (
        <div className='statistics-content-header'>
            <span className='statistics-header-title'>Ваша активность</span>
            <div className='statistics-header-select-container'>
                <div
                    onClick={handleClickSelect}
                    className='statistics-header-select'>
                    <span>{title}</span>
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
