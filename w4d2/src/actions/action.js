import { Add_Todo, Complete_Todo, Counter_Decrement, Counter_Increment,TDelete,TUpdate } from "./action.type";

export const Inc =()=> ({type : Counter_Increment})
export const Dec =()=> ({type : Counter_Decrement})


export const Add = (payload)=>({type : Add_Todo,payload})
export  const Complete = (id)=>({type: Complete_Todo,payload : id})
export const Delete = (id)=>({type: TDelete,payload:id})
export const Update = (updated)=>({type:TUpdate,payload:updated })