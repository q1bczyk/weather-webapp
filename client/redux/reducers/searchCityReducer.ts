interface ISearchCityState{
    cityName : string;
}

const initialState : ISearchCityState = {
    cityName : ''
};

const searchCityReducer = (state : ISearchCityState = initialState, action : any) => {
    switch(action.type){
        case 'ENTER_DATA':
        return{
            ...state,
            cityName : action.payload
        }

        default: 
            return state;
    }
}

export default searchCityReducer;