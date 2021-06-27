import React, {createContext, useReducer} from 'react';

export const OrgContext = createContext();

const initialState = {
    kieran: {

    },
    will: {

    },
    fields: [],
    users: [],
}

const updateState = (type, state, key, payload) => {
    return {
        ...state,
        [type]: {
            ...state[type],
            [key]: payload,
        }
    }
}

function reducer(state, action) {
    const { key, payload } = action;
    switch (action.type) {
        case 'UPDATE_WILL':
            return updateState('will', state, key, payload)
        case 'UPDATE_KIERAN':
            return updateState('kieran', state, key, payload)
        case 'UPDATE_FIELDS':
            return {
                ...state, 
                fields : {
                    ...state.fields,
                    [action.key] : payload
                }
            }
        case 'ADD_USER':
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.key]: payload
                }
            }
        case 'RESET_DATA': 
            return {
                ...state,
                fields: {
                    Age: '',
                    Name: '',
                    FavQuote: '',
                }
            }
        default:
            return state;
    }
}

export const OrgProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <OrgContext.Provider value={{state, dispatch}}>{children}</OrgContext.Provider>
    )
}