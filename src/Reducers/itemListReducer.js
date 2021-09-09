export function itemListReducer (state=[],action){
    switch(action.type){
        case "ADD_TO_LIST":
            return action.payload;
        case "REMOVE_FROM_LIST":
            return action.payload;
        case "EMPTY_LIST":
            return action.payload
        default:
            return state;
    }
}