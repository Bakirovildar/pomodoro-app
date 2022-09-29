import React from 'react';
import './addingTasks.css';
import {DescriptionAdd} from "./DescriptionAdd";
import {AddForm} from "./AddForm";

export function AddingTasks() {
  return (
      <div className='addingTasks-container'>
          <DescriptionAdd />
          <AddForm />
      </div>
  );
}
