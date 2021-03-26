import './App.css';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import Loader from './components/Loader/Loader'
import ReloadedModule from "./components/ReloadedModule/ReloadedModule";
import Table from "./components/Table/Table";
import {getUsers} from './actions/dataAddAction'
import TableSearcher from "./components/TableSearcher/TableSearcher";
import {changeP} from "./redux/reducer";
import ReactPaginate from 'react-paginate';
import {itemSearch} from "./redux/selector";
import {getFilteredData} from "./utils/sorting";
import {onSort} from "./utils/sorting";

function App() {
    const dispatch = useDispatch()
    const state = useSelector(store => store)
    const pageChangeHandler = ({selected}) => {
        dispatch(changeP(selected))
    }
    const [value, setValue] = useState('') //значение в инпуте
    useEffect(() => dispatch(getUsers()), [])
    return (
        <div className="App">
            <>
                {state.isLoading ?
                    <Loader/> : <>
                        <div className="user__action__block">
                            <TableSearcher value={value} setValue={setValue}/>
                            <ReloadedModule/>
                        </div>
                        <Table state={!value ? getFilteredData(state) : itemSearch(value)}
                               onSort={onSort(state, dispatch)}/>
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            pageCount={2}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            forcePage={state.currentPage}/>
                    </>
                }
            </>
        </div>
    );
}

export default App;
