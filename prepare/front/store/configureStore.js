import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
};

// redux 설치
// npm install next-redux-wrapper@6 --force // next js <-> redux 
// npm install redux // redux
// npm install react-redux // react <-> redux
// redux는 중앙 데이터 저장소의 역할을 수행 
// 리액트 내장 ContextAPI을 사용하며  요청, 성공, 실패 3단계를 직접 설정해야함. (비동기 처리하기 불편함)
// 
// ...State 에서 ...의 의미 (참조 유지)
// {} === {} => false 자바스크립트 핵심 기능으로 강조
// const nest = { b: 'c' };
// const prev = { a: nest};
// const next = { ...prev };
// prev.a === next.a => true
const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];

    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducer, enhancer);
    store.dispatch({
        type : 'CHANGE_PASSWORD',
        data : '4321',
    });
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});
export default wrapper;