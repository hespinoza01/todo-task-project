import actions from 'store/actions.store'
/**
 * Case reducers for manipulate global store context
 * @param {Object} state
 * @param {Object} action
 * */
export default function Reducer(state, action) {
    const { type, payload } = action

    // Verify action reducer type
    switch (type) {
        /**
         * Store user info into state context
         */
        case actions.SET_USER:
            return { ...state, user: payload }

        /**
         * Remove user info into state context
         */
        case actions.DELETE_USER:
            return { ...state, user: {} }

        default:
            return state
    }
}
