import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore } from 'redux';

// redux 설치
// npm install next-redux-wrapper@6 --force
// npm install redux
// redux는 중앙 데이터 저장소의 역할을 수행 
// 리액트 내장 ContextAPI을 사용하며  요청, 성공, 실패 3단계를 직접 설정해야함. (비동기 처리하기 불편함)
// 
const configureStore = () => {
    const store = createStore(reducer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});
export default wrapper;