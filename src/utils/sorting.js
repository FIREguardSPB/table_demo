import {sortingData, sortingReloadData} from "../redux/reducer";
import _ from 'lodash';

export const onSort = (state, dispatch) => sortField => { //сортировка по полям
    const sortType = state && state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(state.reload === null ? state.data : state.reload, sortField, sortType);
    const payloadData = {sortField, sortType, orderedData}
    state.reload === null ? dispatch(sortingData(payloadData)) : dispatch(sortingReloadData(payloadData))
}
export const getFilteredData = (state) => { //разбивка по страницам при пагинации
    const pageSize = 50;
    return _.chunk(state.reload === null ? state.data : state.reload, pageSize)[state.currentPage]
}