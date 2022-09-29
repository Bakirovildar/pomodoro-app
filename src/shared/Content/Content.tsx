import React from 'react';
import './content.css'
import {AddingTasks} from "./AddingTasks";
import {ContentTimer} from "./ContentTimer";

export function Content() {
  return (
      <div className='content-container'>
          <AddingTasks />
          <ContentTimer />
      </div>
  );
}
