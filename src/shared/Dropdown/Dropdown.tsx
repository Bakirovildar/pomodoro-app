import React, {ReactNode, useState} from 'react';
import './dropdown.css';

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
                  ddddddd
              </div>
              : ''
        }
      </div>
  );
}
