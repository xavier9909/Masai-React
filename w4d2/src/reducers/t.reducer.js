import { TUpdate,TDelete,Add_Todo,Complete_Todo, GET_TODO, SUCCESS, ERROR, LOADING} from "../actions/action.type";


const initialstate = {
    loading : false,
    erorr:false,
    todos:[]
}

export const  treducer = (state = initialstate,{ type ,payload})=>{

switch (type){
    case SUCCESS : {
         return {
            ...state,
            loading: false,
            todos: payload
         }
    }
    case ERROR :{
        return {
            ...state,
            loading :false,
           error:true   
         }
    }
    case LOADING :{
        return {
            ...state,
          loading :true
         }
         
    }
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