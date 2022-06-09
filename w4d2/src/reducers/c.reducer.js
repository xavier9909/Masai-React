import { Counter_Decrement, Counter_Increment } from "../actions/action.type";

export const  creducer = (state={count:0},{type , payload})=>{

switch (type){
    case Counter_Increment:{state.count++ ; return {...state}};
    case Counter_Decrement:{state.count-- ; return{...state}};
    default:{return state}

}}