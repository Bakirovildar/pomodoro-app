export function addDays(day: any) {
    const date = new Date()
    const days = 7 - new Date().getDay()

    const result = new Date(date);
    result.setDate(result.getDate() + days);

    const res2 = result.setDate(result.getDate() - day);

    return res2;
}


