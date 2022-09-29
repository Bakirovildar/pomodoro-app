import React from 'react';
import './addform.css'

export function AddForm() {
  return (
      <div>
          <form>
              <input className='inpt' type="text" placeholder={'Название задачи'}/>
              <button className='btn-add'>Добавить</button>
          </form>
      </div>
  );
}
