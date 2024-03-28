export const enterData = (cityName : string) => {
    return{
        type : 'ENTER_DATA',
        payload : cityName
    }
}

export const selectUnit = (unit : string) => {
    return{
        type : 'SELECT_UNIT',
        payload : unit
    }
}
