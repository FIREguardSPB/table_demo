import './App.css';
import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import Loader from './components/Loader/Loader'
import Table from "./components/Table/Table";
import {getUsers} from './actions/dataAddAction'
import _ from 'lodash';
import TableSearcher from "./components/TableSearcher/TableSearcher";
import {sortingData, changeP} from "./redux/reducer";
import ReactPaginate from 'react-paginate';


function App() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(getUsers()), [])
    const state = useSelector(store => store)
    const onSort = sortField => { //сортировка
        const cloneData = state && state.data;
        const sortType = state && state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);
        const payloadData = {sortField, sortType, orderedData}
        dispatch(sortingData(payloadData))
    }
    const pageChangeHandler = ({selected}) => {
        dispatch(changeP(selected))
    }
    const pageSize = 50; // количество записей на страницу
    const displayData = _.chunk(state.data, pageSize)[state.currentPage] //фильтруем данные для отображения

    const getFilteredData = () => {
        const {data, search} = state

        if (!search) {
            return displayData
        }

        return data.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
                || item['phone'].toLowerCase().includes(search.toLowerCase())
        })
    }
    // const filteredData = getFilteredData()


    return (

        <div className="App">
            {/*{state.isLoading ?*/}
            {/*    <Loader/> :*/}
            {/*    <>*/}
                    <TableSearcher/>
                    <Table state={getFilteredData()} onSort={onSort}/>
            {/*    </>*/}
            {/*}*/}
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={state.currentPage}
            />
        </div>
    );
}

export default App;
