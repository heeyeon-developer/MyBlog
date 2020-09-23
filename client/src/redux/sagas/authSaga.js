import axios from 'axios'
//import { FormFeedback } from 'reactstrap'
import {call, put, takeEvery, all, fork} from 'redux-saga/effects'
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAILURE } from "../types";

//login
const loginUserAPI = (loginData) => {
    console.log(loginData, "loginData")
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    return axios.post('api/auth', loginData, config)
}
//로그인 하는것 확인
function* loginUser(action) {
    try{
        const result = yield call(loginUserAPI, action.payload)
        console.log(result)
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    }catch(e){
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response
        })
    }
}
//매번 로그인 요청이 들어오는지 감시해라
function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}

//logout
function* logout(action) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
    });
    console.log(e)
  }
}
//매번 로그인 요청이 들어오는지 감시해라
function* watchlogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}
export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchlogout)
    ])
}