export const initialState = {
    isLoggingIn : false,
    isLoggedIn : false,
    isLoggingOut : false,
    me : null,
    signUpData : {},
    loginData : {},
};

export const loginAction = (data) => {
    return {
        type : "LOGIN",
        data
    }
}

export const logoutAction = () => {
    return {
        type : "LOGOUT",
    }
}

// 변하는 값을 입력하는 경우에는 N개 만큼 생성되어 액션 생성이 힘듦.
const changePassword = {
    type : 'CHANGE_PASSWORD',
    data : '4321'
}

// 동적으로 처리할 수 있는 action creator 함수 생성하자
const changeNickname = (data) => {
    return {
        type : 'CHANGE_NICKNAME',
        data,
    }
}
changeNickname('haon')

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST' :
            return {
                ...state,
                isLoggedIn: true,
                me : action.data,
            };
        case 'LOG_IN_SUCCESS' :
            return {
                ...state,
                isLoggedIn: true,
                me : action.data,
            };
        case 'LOG_IN_FAILURE' :
            return {
                ...state,
                isLoggedIn: false,
                me : action.data,
            };
        case 'LOG_OUT_REQUEST' :
            return {
                ...state,
                isLoggingOut: true,
                me : null,
            };
        case 'LOG_OUT_SUCCESS' :
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn : false,
                me : null,
            };
        case 'LOG_OUT_FAILURE' :
            return {
                ...state,
                isLoggingOut : false,
                isLoggedIn: false,
                me : null,
            };
        default:
            return state;
    }
}

export default reducer;