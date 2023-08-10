import { GET_CARS } from "../actionTypes"

const initState={
    cars:null
}

export const carsReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_CARS:
            return{

            ...state,
            cars:action.payload.cars
        }
        default:
            return state
    }
}