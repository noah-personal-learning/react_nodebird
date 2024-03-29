export const initialState = {
    logInLoading : false, // 로그인 시도중
    logInDone : false,
    logInError : null, 
     
    logOutLoading : false, // 로그아웃 시도중
    logOutDone : false,
    logOutError : null, 

    signUpLoading : false, // 회원가입 시도중
    signUpDone : false,
    signUpError : null, 

    followLoading : false, // 팔로우 시도중
    followDone : false,
    followError : null, 

    unfollowLoading : false, // 언팔로우 시도중
    unfollowDone : false,
    unfollowError : null, 

    changeNicknameLoading : false, //  닉네임 변경 시도중
    changeNicknameDone : false,
    changeNicknameError : null, 
    
    me : null,
    signUpData : {},
    loginData : {},
};

// export const loginAction = (data) => {
//     return {
//         type : "LOGIN",
//         data
//     }
// }

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    nickname: 'noah',
    id: 1,
    Posts: [{id: 1}],
    Followings: [{ nickName: '거북이'}, { nickName: '거북이2'}, { nickName: '거북이3'}],
    Followers: [{ nickName: '거북이'}, { nickName: '거북이2'}, { nickName: '거북이3'}],
})

export const loginRequestAction = (data) => ({
    type : 'LOG_IN_REQUEST',
    data
});

export const logoutRequestAction = () => ({
    type : 'LOG_OUT_REQUEST',
});

// 변하는 값을 입력하는 경우에는 N개 만큼 생성되어 액션 생성이 힘듦.
// const changePassword = {
//     type : 'CHANGE_PASSWORD',
//     data : '4321'
// }

// // 동적으로 처리할 수 있는 action creator 함수 생성하자
// const changeNickname = (data) => {
//     return {
//         type : 'CHANGE_NICKNAME',
//         data,
//     }
// }
// changeNickname('haon')

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // 로그인
        case LOG_IN_REQUEST :
            return {
                ...state,
                logInLoading: false,
                logInError: null,
                logInDone: false,
            };
        case LOG_IN_SUCCESS :
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: dummyUser(action.data),
            };
        case LOG_IN_FAILURE :
            return {
                ...state,
                logInLoading: false,
                logInError: action.error,
            };
        // 로그아웃
        case LOG_OUT_REQUEST :
            return {
                ...state,
                logOutLoading : true,
                logOutDone : false,
                logOutError : null, 
            };
        case LOG_OUT_SUCCESS :
            return {
                ...state,
                logOutLoading : false,
                logOutDone : true,
                me : null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading : false,
                logOutError : action.error, 
            };
        // 회원가입
        case SIGN_UP_REQUEST :
            return {
                ...state,
                signUpLoading : true,
                signUpDone : false,
                signUpError : null, 
            };
        case SIGN_UP_SUCCESS :
            return {
                ...state,
                signUpLoading : false,
                signUpDone : true,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading : false,
                signUpError : action.error, 
            };
        // 닉네임 변경
        case CHANGE_NICKNAME_REQUEST :
            return {
                ...state,
                changeNicknameLoading : true,
                changeNicknameDone : false,
                changeNicknameError : null, 
            };
        case CHANGE_NICKNAME_SUCCESS :
            return {
                ...state,
                changeNicknameLoading : false,
                changeNicknameDone : true,
            };
        case CHANGE_NICKNAME_FAILURE:
            return {
                ...state,
                changeNicknameLoading : false,
                changeNicknameError : action.error, 
            };
        // 게시글 추가
        case ADD_POST_TO_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{ id: action.data }, ...state.me.Posts],
                }
            };
        // 게시글 삭제
        case REMOVE_POST_OF_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: state.me.Posts.filter( (v) => v.id !== action.data),
                }
            };
        default:
            return state;
    }
}

export default reducer;