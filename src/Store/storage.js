import { dataReducer } from "../Redux/Reducer/CombineReducer";
import {createStore} from "redux"
export const storage = createStore(dataReducer)