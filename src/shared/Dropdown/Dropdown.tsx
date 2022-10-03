import React, {ReactNode, useEffect, useRef, useState} from 'react';
import './dropdown.css';
import {IconIncrease} from "../../icons/IconIncrease";
import {IconDecreasy} from "../../icons/IconDecreasy";
import {IconEdit} from "../../icons/IconEdit";
import {IconDelete} from "../../icons/IconDelete";
import {useDispatch} from "react-redux";
import {addMinusCountTime, addPlusCountTime, deleteTaskAction} from "../../store/action";

interface IDropdown {
    button: ReactNode
    id: any
    clickEditItem: any
}

export function Dropdown({button, id, clickEditItem}: IDropdown) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownElement = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        function clickHandler(event: MouseEvent) {
            if (event.target instanceof Node && !dropdownElement.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', clickHandler)

        return () => {
            document.removeEventListener('click', clickHandler)
        }
    }, [isOpen])

    const deleteTaskHandle = () => {
        setIsOpen(false)
        dispatch(deleteTaskAction(id))
    }

    const minusCountHandle = () => {
        dispatch(addMinusCountTime(id))
    }

    const plusCountHandle = () => {
        dispatch(addPlusCountTime(id))
    }

    const editHandle = () => {
        setIsOpen(false)
        clickEditItem(id)
    }

    return (
        <div ref={dropdownElement} className='dropdown-wrapper'>
            <div onClick={() => setIsOpen(!isOpen)}>
                {button}
            </div>
            {
                isOpen
                    ? <div className='dropdown-item'>
                        <div onClick={plusCountHandle} className='dropdown-item-list'><IconIncrease/><span>Увеличить</span></div>
                        <div onClick={minusCountHandle} className='dropdown-item-list'><IconDecreasy/><span>Уменьшить</span></div>
                        <div onClick={editHandle} className='dropdown-item-list'><IconEdit/><span>Редактировать</span></div>
                        <div onClick={deleteTaskHandle} className='dropdown-item-list'><IconDelete/><span>Удалить</span></div>
                    </div>
                    : ''
            }
        </div>
    );
}
