import {addDays} from "./addDays";

export function getFiltered () {

    const arr: any = []

    for (let i = 0; i < 21; i++) {
        arr.push(new Date(addDays(i)).toString().slice(0, 15))
    }
    arr.reverse()

    localStorage.setItem('weeksDate', arr)

    localStorage.setItem('dateFirst', arr.slice(14, 21))
    localStorage.setItem('dateTwo', arr.slice(7, 14))
    localStorage.setItem('dateThree', arr.slice(0, 7))
}
