import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {displayDetailInfo} from "../../redux/reducer";
import DetailInfo from "../DetailInfo/DetailInfo";
import styles from './Table.module.css'

const Table = ({state, onSort}) => {
    const dispatch = useDispatch()
    const displayIconSort = useSelector(store => store.sort)
    const sortName = useSelector(store => store.sortField)
    const display = useSelector(store => store.row)
    const displayInfo = (item) => {
        dispatch(displayDetailInfo(item))
    } //отобразить всю инфу по клику
    return (
        <>
            <table className={`${styles.table}`}>
                <thead className={`${styles.thead_style}`}>
                <tr>
                    <th className={`${styles.th_id}`} onClick={onSort.bind(null, 'id')}>ID {sortName === 'id' ?
                        <small>{displayIconSort}</small> : null}</th>
                    <th className={`${styles.th_name}`} onClick={onSort.bind(null, 'firstName')}>First
                        Name {sortName === 'firstName' ? <small>{displayIconSort}</small> : null}</th>
                    <th className={`${styles.th_surname}`} onClick={onSort.bind(null, 'lastName')}>Last
                        Name {sortName === 'lastName' ? <small>{displayIconSort}</small> : null}</th>
                    <th className={`${styles.th_mail}`}
                        onClick={onSort.bind(null, 'email')}>E-mail {sortName === 'email' ?
                        <small>{displayIconSort}</small> : null}</th>
                    <th className={`${styles.th_phone}`}
                        onClick={onSort.bind(null, 'phone')}>Phone {sortName === 'phone' ?
                        <small>{displayIconSort}</small> : null}</th>
                </tr>
                </thead>
                <tbody className={styles.body__table}>
                {state && state.map(item => (
                    <tr key={item.id * Math.random()} onClick={(e) => displayInfo(item)}>
                        <td className={`${styles.td_id}`}>{item.id}</td>
                        <td className={`${styles.td_name}`}>{item.firstName}</td>
                        <td className={`${styles.td_surname}`}>{item.lastName}</td>
                        <td className={`${styles.td_mail}`}>{item.email}</td>
                        <td className={`${styles.td_phone}`}>{item.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {display ? <DetailInfo state={display}/> : null}
        </>
    );
};

export default Table;