const ADD_DATA = "ADD_DATA"
const SORT_DATA = "SORT_DATA"
const DISPLAY_INFO = "DISPLAY_INFO"
const CHANGE_PAGE = "CHANGE_PAGE"
const LOADING = "LOADING"

// state
const defaultState = {
    isModeSelected: false,
    isLoading: true,
    data: [],
    sort: 'asc',  // 'desc'
    sortField: 'id', // поле по умолчанию
    row: null,
    currentPage: 0,
    search: null,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state, data: action.payload, isLoading: false
            }
        case SORT_DATA:
            return {
                ...state,
                data: action.payload.orderedData,
                sort: action.payload.sortType,
                sortField: action.payload.sortField
            }
        case DISPLAY_INFO:
            return {
                ...state,
                row: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state, currentPage: action.payload
            }
        case LOADING:
            return {
                ...state, isLoading: true
            }
        default:
            return state
    }
}

export const addData = listData => ({type: ADD_DATA, payload: listData})
export const sortingData = (orderedData) => ({type: SORT_DATA, payload: orderedData})
export const displayDetailInfo = info => ({type: DISPLAY_INFO, payload: info})
export const changeP = page => ({type: CHANGE_PAGE, payload: page})
export const loading = () => ({type: LOADING})
