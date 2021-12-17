import { takeLatest } from "redux-saga/effects";
import { TypeData } from "../type/type";
import {fetchUser} from "./fetchUser"

  export function* mySaga() {
      
      yield takeLatest(TypeData.GetData,fetchUser)
  }