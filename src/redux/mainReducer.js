export const mainReducer = (state = {
    CSVItems: {},
}, action) => {
    switch (action.type) {
        case "ADD_INFO_FROM_CSV": 
        return {
            ...state,
           CSVInfo: [...action.value],
        };

        default:
            return state;
    }
};