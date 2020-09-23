import {all, fork} from 'redux-saga/effects'
import axios from 'axios'

import authSaga from './authSaga'
import dotenv from 'dotenv'
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL
//genfunction라고 불려서 여러 값을 반환하는 최신 문법 함수
//사용 볍은 function뒤에 *표시
//[]안에 여러 값들을 불러와서 사용 하게 됨
export default function* rootSaga() {
    yield all([
        fork(authSaga)
    ])
}
