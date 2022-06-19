import { Add_Todo, Complete_Todo, Counter_Decrement, Counter_Increment,GET_TODO,TDelete,TUpdate,ERROR,SUCCESS,LOADING } from "./action.type";
import axios from "axios"
export const Inc =()=> ({type : Counter_Increment})
export const Dec =()=> ({type : Counter_Decrement})

export const getTodos = (dispatch,payload)=>{ 
    dispatch({type:LOADING})
        axios.get("http://localhost:8080/todos").then((r)=>{
         dispatch({type : SUCCESS,payload:r.data})
        }).catch(()=>{
            dispatch({type:ERROR})
        })}
export const Add = (payload)=>({type : Add_Todo,payload})
export  const Complete = (id)=>({type: Complete_Todo,payload : id})
export const Delete = (id)=>({type: TDelete,payload:id})
export const Update = (updated)=>({type:TUpdate,payload:updated })