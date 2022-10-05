export const getTimes = (timeMinuts: number) => {
    if (timeMinuts > 60) {
        const time = (timeMinuts / 60).toString()
        const minutes = time.slice(2, 4)
        const ceilMinutes = Math.ceil(+('0.' + minutes) * 60)
        if (isNaN(ceilMinutes)) {
            return 0
        }
        return ceilMinutes
    }
    return timeMinuts
}
