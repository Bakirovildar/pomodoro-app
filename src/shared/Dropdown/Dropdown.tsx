import React, {ReactNode, useEffect, useRef, useState} from 'react';
import './dropdown.css';
import {IconIncrease} from "../../icons/IconIncrease";
import {IconDecreasy} from "../../icons/IconDecreasy";
import {IconEdit} from "../../icons/IconEdit";
import {IconDelete} from "../../icons/IconDelete";

interface IDropdown {
    button: ReactNode
}

export function Dropdown({button}: IDropdown) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownElement = useRef<HTMLDivElement>(null)

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

    return (
        <div ref={dropdownElement} className='dropdown-wrapper'>
            <div onClick={() => setIsOpen(!isOpen)}>
                {button}
            </div>
            {
                isOpen
                    ? <div className='dropdown-item'>
                        <div onClick={() => setIsOpen(false)} className='dropdown-item-list'><IconIncrease/><span>Увеличить</span></div>
                        <div onClick={() => setIsOpen(false)} className='dropdown-item-list'><IconDecreasy/><span>Уменьшить</span></div>
                        <div onClick={() => setIsOpen(false)} className='dropdown-item-list'><IconEdit/><span>Редактировать</span></div>
                        <div onClick={() => setIsOpen(false)} className='dropdown-item-list'><IconDelete/><span>Удалить</span></div>
                    </div>
                    : ''
            }
        </div>
    );
}
