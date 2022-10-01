import {Reducer} from "redux";
import {Tasks, TASKS} from "./action";

export type RootState = {
    descriptionAdd: Array<any>,
    tasks: any
}

const initialState: RootState = {
    descriptionAdd: [
        {id: 1, title: 'Выберите категорию и напишите название текущей задачи'},
        {id: 2, title: 'Запустите таймер («помидор»)'},
        {id: 3, title: 'Работайте пока «помидор» не прозвонит'},
        {id: 4, title: 'Сделайте короткий перерыв (3-5 минут)'},
        {
            id: 5,
            title: 'Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена.     Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).'
        }
    ],
    tasks: []
}

type MyAction = Tasks

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case TASKS:
            return {
                ...state,
                tasks: [action.tasks, ...state.tasks]
            }

        default:
            return state
    }
}
