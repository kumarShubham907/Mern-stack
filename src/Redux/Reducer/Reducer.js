import { TypeData } from "../type/type"

const initialState = {
    list: [],
}
export const AddUserLsit = (state = initialState, { type, data }) => {
    switch (type) {
        case TypeData.UserList: return { ...state, list: [...state.list, data] }
        default: return state
    }
}

export const SetDataList = (state = {}, { type, dataIn, indexId }) => {
    switch (type) {
        case TypeData.SetData: return { ...state, dataIn }
        case TypeData.DeleteData: return { ...state, dataIn: indexId }
        case TypeData.SaveList: return { ...state, dataIn: indexId }
        default: return state
    }
}