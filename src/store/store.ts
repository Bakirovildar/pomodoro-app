import {Reducer} from "redux";
import {
    AddCountTime,
    AddMinusCountTime,
    ADDMINUSCOUNTTIME,
    ADDPLUSCOUNTTIME,
    COUNTWORK,
    CountWorkAction,
    DELETETASK,
    DeleteTask,
    EditValueAction,
    EDITVALUETASK,
    Tasks,
    TASKS
} from "./action";

export type RootState = {
    descriptionAdd: Array<any>,
    tasks: any,
    countWork: number,
    dateWork: string
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
    tasks: [],
    countWork: 0,
    dateWork: ''
}

type MyAction = Tasks
    | DeleteTask
    | AddCountTime
    | AddMinusCountTime
    | EditValueAction
    | CountWorkAction

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case TASKS:
            return {
                ...state,
                tasks: [action.tasks, ...state.tasks]
            }
        case DELETETASK:
            return {
                ...state,
                tasks: state.tasks.filter((i: any) => i.id !== action.id)
            }
        case ADDPLUSCOUNTTIME:
            return {
                ...state,
                tasks: state.tasks.map((i: any) => {
                    if (i.id === action.id) {
                        i.time += 1
                    }

                    return i
                })
            }
        case ADDMINUSCOUNTTIME:
            return {
                ...state,
                tasks: state.tasks.map((i: any) => {
                    if (i.id === action.id) {
                        i.time -= 1
                    }

                    return i
                })
            }
        case EDITVALUETASK:
            return {
                ...state,
                tasks: state.tasks.map((i: any) => {
                    if (i.id === action.id) {
                        i.valueTask = action.value
                    }

                    return i
                })
            }
        case COUNTWORK:
            return {
                ...state,
                countWork: action.time,
                dateWork: action.date
            }
        default:
            return state
    }
}
