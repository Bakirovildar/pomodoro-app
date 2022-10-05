import React from 'react';
import './content.css'
import {AddingTasks} from "./AddingTasks";
import {ContentTimer} from "./ContentTimer";
import {Routes, Route} from 'react-router-dom'
import {Statistics} from "./statics/Static";

export function Content() {
    return (
        <Routes>
            <Route path={'/tasks'} element={
                <div className='content-container'>
                    <AddingTasks/>
                    <ContentTimer/>
                </div>}/>
            <Route path={'/stat'} element={<Statistics/>}/>
        </Routes>
    );
}
