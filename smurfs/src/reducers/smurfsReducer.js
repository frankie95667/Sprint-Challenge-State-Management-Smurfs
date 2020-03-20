export const GET_INITIAL_SMURFS = 'GET_INITIAL_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const smursReducer = (state = [], action) => {
    switch(action.type){
        case GET_INITIAL_SMURFS:
            return action.payload
        case ADD_SMURF:
            return action.payload
        case UPDATE_SMURF:
            return action.payload
        case DELETE_SMURF:
            return action.payload
        default:
            return state;
    }
}