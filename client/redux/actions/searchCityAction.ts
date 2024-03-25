export const enterData = (cityName : string) => {
    return{
        type : "ENTER_DATA",
        payload : cityName
    }
}
