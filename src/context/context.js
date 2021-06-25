import React, {createContext, useReducer} from 'react';

export const OrgContext = createContext();

const initialState = {
    kieran: {

    },
    will: {

    }
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