import { TypeData } from "../Type/Type"
const initialState = {
    list :[]
}
export const AddUserLsit = (state=initialState,{type,data})=>{
    switch (type) {
        case TypeData.UserList: return {...state,list: [...state.list, data]}
           
        default: return state
    }
}