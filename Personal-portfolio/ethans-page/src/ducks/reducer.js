const INITIAL_STATE = {
    user: {}, 
}

const LOGIN_USER = "LOGIN_USER"; 
const LOGOUT_USER = "LOGOUT_USER";

const SPACE_THEME = "SPACE_THEME"; 
const NATURE_THEME = "NATURE_THEME"; 

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        //Auth
        case LOGIN_USER: 
            return Object.assign({}, state, {user: action.payload}); 
        case LOGOUT_USER: 
            return Object.assign({}, state, {user: {}}); 
        //Theme
        case SPACE_THEME:
            return Object.assign({}, state, {"THEME": action.payload}); 
        case NATURE_THEME:
            return Object.assign({}, state, {"THEME": action.payload}); 
        default: 
            return state; 
    }
}

//Login/Logout
export function loginUser(user) {
    return {
        type: LOGIN_USER, 
        payload: user //This will be user object or username + photo URL
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER, 
    }
}

//Nature/Space
export function spaceTheme() {
    return {
        type: SPACE_THEME, 
        payload: "SPACE"
    }
}

export function natureTheme() {
    return {
        type: NATURE_THEME, 
        payload: "NATURE"
    }
}