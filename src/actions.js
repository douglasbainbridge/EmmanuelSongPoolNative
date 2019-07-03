export const filter = (filter) => dispatch => {
    dispatch({ type: 'FILTER', payload: filter });
}

export const sort = (sort) => dispatch => {
    dispatch({ type: 'SORT', payload: sort });
}