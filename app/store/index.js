import { createStore , applyMiddleware , compose } from 'redux'  // 引入createStore方法
import thunk from 'redux-thunk'
import reducer from './reducer'
// const store = createStore(reducer)          // 创建数据存储仓库

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore( reducer, enhancer) 
 
export default store   