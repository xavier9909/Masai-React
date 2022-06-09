import { TUpdate,TDelete,Add_Todo,Complete_Todo} from "../actions/action.type";

export const  treducer = (state = {todos  : []},{ type ,payload})=>{

switch (type){
    case Complete_Todo:{ 
       
        let newTodos = state.todos.map((todo) => {
            if(todo.id===payload.id){
todo.completed = true            }
             return todo
        });
        
        return {...state,todos:newTodos}
        return {...state}};
    case Add_Todo:{ return{...state,todos : [...state.todos,{...payload,id:state.todos.length,}]}};
    case TUpdate:{
        let newTodos = state.todos.map((todo) => {
            if(todo.id===payload.id){
return payload
            }
            else return todo
        });
        
        return {...state,todos:newTodos}
 
    
    }

    case TDelete:{return{...state}}
    default:{return state}

}}