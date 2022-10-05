import {ActionCreator} from "redux";

export const TASKS = 'TASKS'

export type Tasks = {
    type: typeof TASKS,
    tasks: any
}

export const addTask: ActionCreator<Tasks> = (task) => ({
    type: TASKS,
    tasks: task
})

export const DELETETASK = 'DELETETASK'

export type DeleteTask = {
    type: typeof DELETETASK,
    id: any
}

export const deleteTaskAction: ActionCreator<DeleteTask> = (id) => ({
    type: DELETETASK,
    id
})

export const ADDPLUSCOUNTTIME = 'ADDPLUSCOUNTTIME'

export type AddCountTime = {
    type: typeof ADDPLUSCOUNTTIME
    id: any
}

export const addPlusCountTime: ActionCreator<AddCountTime> = (id) => ({
    type: ADDPLUSCOUNTTIME,
    id
})

export const ADDMINUSCOUNTTIME = 'ADDMINUSCOUNTTIME'

export type AddMinusCountTime = {
    type: typeof ADDMINUSCOUNTTIME
    id: any
}

export const addMinusCountTime: ActionCreator<AddMinusCountTime> = (id) => ({
    type: ADDMINUSCOUNTTIME,
    id
})

export const EDITVALUETASK = 'EDITVALUETASK'

export type EditValueAction = {
    type: typeof EDITVALUETASK
    value: string
    id: any
}

export const editValueTask: ActionCreator<EditValueAction> = (value, id) => ({
    type: EDITVALUETASK,
    value,
    id
})

export const COUNTWORK = 'COUNTWORK'

export type CountWorkAction = {
    type: typeof COUNTWORK
    time: any
    date: any
}

export const countWork: ActionCreator<CountWorkAction> = (time, date) => ({
    type: COUNTWORK,
    time,
    date
})
