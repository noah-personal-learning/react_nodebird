import { all, fork} from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ])
}

// * = generator
// 사용법 saga.next()
// yield가 await과 비슷