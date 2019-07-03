const initialState = {
    initialLoading: true,
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
                initialLoading: action.payload,
            }
        case 'GET_SONGS_INITIAL':
            return {
                ...state,
                songs: action.payload,
                filteredSongs: action.payload,
                initialLoading: false,
            }
        case 'FILTER':
            state[action.payload] = !state[action.payload]
            return {
                ...state,
                filteredSongs: state.songs.filter(s =>
                    (s.focusList || !state.filterFocus)
                    && (s.newSong || !state.filterNew)
                ),
            }
        case 'SORT':
            return {
                ...state,
                songs: state.songs.sort((a, b) => {
                    if (a[action.payload] < b[action.payload]) {
                        return -1;
                    }
                    if (a[action.payload] > b[action.payload]) {
                        return 1;
                    }
                    return 0;
                }),
                filteredSongs: state.filteredSongs.sort((a, b) => {
                    if (a[action.payload] < b[action.payload]) {
                        return -1;
                    }
                    if (a[action.payload] > b[action.payload]) {
                        return 1;
                    }
                    return 0;
                })
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