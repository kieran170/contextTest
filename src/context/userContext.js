import React, {createContext, useReducer} from 'react';

export const UserContext = createContext()

const initialState = {
    fields: [],
    user: {},
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_FIELDS': 
            return {
                ...state, 
                fields: {
                    ...state.fields,
                    [action.key]: action.payload
                }
            }
        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload,
                fields: [],
            }
        case 'LOG_OUT': 
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <UserContext.Provider value={{state, dispatch}}>{children}</UserContext.Provider>
    )
}