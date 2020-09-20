import React from 'react'
//리덕스 스토어와 라우트를 결합 시킬것
import {Provider} from 'react-redux'
import {ConnectedRouter, connectRouter} from 'connected-react-router'
import store, {history} from './store'
import MyRouter from './routes/Router'

//bootstrap을 사용할것 - css framework - 미리 만들어진 css를 사용해서 이쁘게 만드는 것
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/custom.scss'

const App = () => {
  return (
    //store로 감싸는 이유는 만드는 사이트의 상태관리는 store에서만 하므로 - 최상위에 store에 달아 둠
    //라우터는 히스토리를 이용해서 작동 시키기 위해서 달아 줌
    <Provider store={store}>  
      <ConnectedRouter history={history}>
        <MyRouter />
      </ConnectedRouter>

    </Provider>
  );
}

export default App;
