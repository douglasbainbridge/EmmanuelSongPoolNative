
const initialState = {
    loading: true,
    songs: [],
    filteredSongs: [],
    error: '',
    filterFocus: false,
    filterNew: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'GET_SONGS':
            return {
                ...state,
                songs: action.payload,
                filteredSongs: action.payload,
                loading: false,
            }
        case 'GET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}