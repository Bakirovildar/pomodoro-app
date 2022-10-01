import React from 'react';
import './tasksitem.css';
import {Dropdown} from "../../../Dropdown";
import {IconDropdown} from "../../../../icons/IconDropdownButton";

export function TasksItem() {
    return (
        <div>
            <div className='tasks-item-container'>
                <div className='tasks-item-desc'>
                    <div className='tasks-item-num'>1</div>
                    <span>Сверстать сайт</span>
                </div>
                <Dropdown button={<IconDropdown/>}/>
            </div>
            <div className='sumTime'>
                25 мин
            </div>
        </div>
    );
}
