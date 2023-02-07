import { all, call, fork, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { addLocale } from "next/dist/next-server/lib/router/router";

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function addPostAPI(data) {
    return axios.post('/api/add/post', data)
}

// fork == 비동기 함수 호출
// call == 동기 함수 호출
// put == dispatch
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data)
        yield put({
            type: "LOG_IN_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: err.response.data
        })
    }
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: "ADD_POST_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data
        })
    }
}

function* watchLogIn() {
    // while (true) {
    //     yield take("LOG_IN_REQUEST", logIn)
    // }
    // -> 직관적이지 않아 사용 잘 안함
    yield takeLatest("LOG_IN_REQUEST", logIn)
}

function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST", logOut)
}

function* watchAddPost() {
    // 마우스 N번 클릭시 마지막 요청 1회만 실행
    yield takeLatest("ADD_POST_REQUEST", addPost)

    // 재요청 시간 제한 (Ex. 디도스 공격으로 추측되면 바꾼다.)
    // yield throttle("ADD_POST_REQUEST", addPost, 10000)
    
}

export default function* rootSaga() {
    yield addLocale([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ])
}

// * = generator
// 사용법 saga.next()
// yield가 await과 비슷