import { call, put } from 'redux-saga/effects'
import { setData } from '../action/action';
import { fetchApi } from './fetchApi';

export function* fetchUser() {
    try {
        const user = yield call(fetchApi);
        yield put(setData(user));
    } catch (e) {
        console.log("ERROR OCCURED IN FETCH USER", e);
    }
}