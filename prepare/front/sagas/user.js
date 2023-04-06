import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} from '../reducers/user';
// import axios from 'axios';

// function logInAPI(data) {
//     return axios.post('/api/login', data)
// }

// function logOutAPI(data) {
//     return axios.post('/api/logout', data)
// }

// fork == 비동기 함수 호출
// call == 동기 함수 호출
// put == dispatch
function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data)
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }
}

function* logOut(action) {
    try {
        // const result = yield call(logOutAPI, action.data)
        yield put({
            type: LOG_OUT_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function* signUp(action) {
    try {
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}

function* watchLogIn() {
    // while (true) {
    //     yield take("LOG_IN_REQUEST", logIn)
    // }
    // -> 직관적이지 않아 사용 잘 안함
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}