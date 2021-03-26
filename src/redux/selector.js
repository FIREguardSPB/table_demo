import {createSelector} from "reselect";

const selectAllData = state => state.reload === null ? state.data : state.reload;
export const itemSearch = (search) => createSelector(
    selectAllData,
    items => items.filter(item => {
        return item['firstName'].toLowerCase().includes(search.toLowerCase())
            || item['lastName'].toLowerCase().includes(search.toLowerCase())
            || item['email'].toLowerCase().includes(search.toLowerCase())
            || item['phone'].toString().includes(search)
    })
);

