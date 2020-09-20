import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const middlewares = [sagaMiddleware, routerMiddleware(history)]
//chrome같은 곳에서 개발시 상태를 볼수있는 개발자 도구
const devtools = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__

//배포시에는 프로젝트 동작이 보이면 안되므로 데브툴 삭제
const composeEnhancer = process.env.NODE_ENV === "produection" ? compose : devtools || compose
//리액트에서는 위에서 아래로 상태값을 가져오는데
//복잡한 앱을 만들게 되면 위에서 아래로 값을 가져오는 것이 확인이 어려워진다
//redux는 store라는 곳에 모든 상태값을 저장하게 되어서 한곳에서 모든 상태값이 저장되어 모든 상태값을 가져와서 사용하게 된다
//모든 상태값을 store에서만 사용하면 됨
const store = createStore(
    createRootReducer(history),
    initialState,   //웹의 모든 상태를 담고 있는 초기값
    composeEnhancer(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store