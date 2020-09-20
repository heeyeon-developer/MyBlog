import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history)
})
//커낵티드 라우터를 이용해서 router라는 새로운 이름으로 히스토리를 통한 라우터를 불러와서 사용 가능 함
export default createRootReducer