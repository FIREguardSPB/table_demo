import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reloadData} from "../../actions/dataAddAction";
import {loading} from "../../redux/reducer";
import styles from './ReloadedModule.module.css'

const ReloadedModule = () => {
    const sortType = useSelector(store => store.sort)
    const sortField = useSelector(store => store.sortField)
    const dispatch = useDispatch()
    const reUploadData = () => {
        dispatch(loading())
        dispatch(reloadData(sortType, sortField))
    }
    return (
        <div className={styles.reload__container}>
            <div className={styles.reload__button} onClick={reUploadData}>Reload data</div>
        </div>
    );
};

export default ReloadedModule;