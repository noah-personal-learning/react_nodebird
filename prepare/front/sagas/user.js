import { all, fork } from "redux-saga/effects";


function logInAPI(data) {
    return axios.post('/api/login', data)
}

function logOutAPI(data) {
    return axios.post('/api/logout', data)
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

function* logOut(action) {
    try {
        const result = yield call(logOutAPI, action.data)
        yield put({
            type: "LOG_OUT_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield put({
            type: "LOG_OUT_FAILURE",
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

export default function* userSaga() {

    yield all([
        fork(watchLogIn),
        fork(watchLogOut)
    ])

}