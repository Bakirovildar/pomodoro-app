import React, {ReactNode, useState} from 'react';
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

  return (
      <div className='dropdown-wrapper'>
        <div onClick={()=> setIsOpen(!isOpen)}>
          {button}
        </div>
        {
          isOpen
              ?<div className='dropdown-item'>
                  <div className='dropdown-item-list'><IconIncrease /><span>Увеличить</span></div>
                  <div className='dropdown-item-list'><IconDecreasy /><span>Уменьшить</span></div>
                  <div className='dropdown-item-list'><IconEdit /><span>Редактировать</span></div>
                  <div className='dropdown-item-list'><IconDelete /><span>Удалить</span></div>
              </div>
              : ''
        }
      </div>
  );
}
