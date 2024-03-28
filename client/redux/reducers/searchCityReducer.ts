interface ISearchCityState{
    cityName : string;
    unit : string;
}

const initialState : ISearchCityState = {
    cityName : '',
    unit : 'standard'
};

const searchCityReducer = (state : ISearchCityState = initialState, action : any) => {
    switch(action.type){
        case 'ENTER_DATA':
        return{
            ...state,
            cityName : action.payload
        }

        case 'SELECT_UNIT':
        return{
            ...state,
            unit : action.payload
        }

        default: 
            return state;
    }
}

export default searchCityReducer;