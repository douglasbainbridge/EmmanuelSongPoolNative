export const filter = (filter) => dispatch => {
    dispatch({ type: 'FILTER_LOADING', payload: filter });
    dispatch({ type: 'FILTER', payload: { filter: filter } });
}
export const filterLoading = (filter) => dispatch => {
    dispatch({ type: 'FILTER_LOADING', payload: filter });
}

export const sort = (sort) => dispatch => {
    dispatch({ type: 'SORT_LOADING', payload: sort });
    dispatch({ type: 'SORT', payload: sort });
}

export const search = (search) => dispatch => {
    dispatch({ type: 'FILTER', payload: { filter: 'search', searchString: search } });
}