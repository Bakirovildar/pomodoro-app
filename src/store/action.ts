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

