import React from 'react';
import './addingTasks.css';
import {DescriptionAdd} from "./DescriptionAdd";
import {AddForm} from "./AddForm";
import {TasksItem} from "./TasksItem";

export function AddingTasks() {
  return (
      <div className='addingTasks-container'>
          <DescriptionAdd />
          <AddForm />
          <TasksItem />
      </div>
  );
}
