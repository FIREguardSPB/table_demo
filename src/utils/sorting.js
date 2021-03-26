import {sortingData} from "../redux/reducer";
import _ from 'lodash';

export const onSort = (state, dispatch) => sortField => { //сортировка по полям
    const sortType = state && state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(state.data, sortField, sortType);
    const payloadData = {sortField, sortType, orderedData}
    dispatch(sortingData(payloadData))
}
export const getFilteredData = (state) => { //разбивка по страницам при пагинации
    const pageSize = 50;
    return _.chunk(state.data, pageSize)[state.currentPage]
}