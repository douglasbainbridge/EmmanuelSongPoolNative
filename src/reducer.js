

const initialState = {
    initialLoading: true,
    songs: [],
    filteredSongs: [],
    error: '',
    filterFocus: false,
    filterFocusLoading: false,
    filterNew: false,
    filterNewLoading: false,
    sortedBy: '',
    sortedByLoading: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                initialLoading: action.payload,
            }
        case 'GET_SONGS_INITIAL':
            return {
                ...state,
                songs: action.payload,
                filteredSongs: action.payload,
                initialLoading: false,
            }
        case 'FILTER_LOADING':
            return {
                ...state,
                [action.payload + 'Loading']: true,
            }
        case 'FILTER':
            state[action.payload] = !state[action.payload]
            return {
                ...state,
                [action.payload + 'Loading']: false,
                filteredSongs: state.songs.filter(s =>
                    (s.focusList || !state.filterFocus)
                    && (s.newSong || !state.filterNew)
                ),
            }
        case 'SORT':
            return {
                ...state,
                sortedBy: action.payload,
                sortedByLoading: '',
                songs: state.songs.slice().sort((a, b) => {
                    if ((a[action.payload] || '') < (b[action.payload] || '')) {
                        return -1;
                    }
                    if ((a[action.payload] || '') > (b[action.payload] || '')) {
                        return 1;
                    }
                    return 0;
                }),
                filteredSongs: state.filteredSongs.slice().sort((a, b) => {
                    if ((a[action.payload] || '') < (b[action.payload] || '')) {
                        return -1;
                    }
                    if ((a[action.payload]) > (b[action.payload])) {
                        return 1;
                    }
                    return 0;
                }),
            }
        case 'SORT_LOADING':
            return {
                ...state,
                sortedByLoading: action.payload,
            }

        case 'GET_ERROR':
            return {
                ...state,
                error: action.payload,
                initialLoading: false
            }
        default:
            return state;
    }
}