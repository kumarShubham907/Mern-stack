import { TypeData } from "../type/type"

export const DataList = (data) => {
    return {
        type: TypeData.UserList,
        data
    }
}
export const getData = () => {
    return {
        type: TypeData.GetData
    }
}
export const setData = (dataIn) => {
    return {
        type: TypeData.SetData,
        dataIn
    }
}
export const DeleteDatalist = (indexId) => {
    return {
        type: TypeData.DeleteData,
        indexId
    }
}
export const SaveDatalist = (indexId) => {
    return {
        type: TypeData.SaveList,
        indexId
    }
}

