import { createContext, useReducer } from 'react'

// Import store items
import actions from 'store/actions.store'
import initialState from 'store/initial-state.store'
import Reducer from 'store/reducer.store'

// create global context
const Store = createContext(initialState)

/**
 * Wrapper for golbal store provider
 * @param {React.Component} children
 * */
function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>
}

export default Provider
export { actions, initialState, Reducer, Store }
