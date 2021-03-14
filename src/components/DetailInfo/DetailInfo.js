import React from 'react';
import {useDispatch} from "react-redux";
import styles from './DetailInfo.module.css'
import {displayDetailInfo} from '../../redux/reducer'
const DetailInfo = ({state}) => {
    const dispatch = useDispatch()
    const closeModal = () => {dispatch(displayDetailInfo(null))}
    return (
        <div className={`${styles.modal}`}>
            <div className={`${styles.close}`} onClick={closeModal}>CLOSE</div>
            <p>Выбран пользователь <b>{state.firstName + ' ' + state.lastName}</b></p>
            <p>
                Описание: <br />
                <textarea defaultValue={state.description} />
            </p>

            <p>Адрес проживания: <b>{state.address.streetAddress}</b></p>
            <p>Город: <b>{state.address.city}</b></p>
            <p>Провинция/штат: <b>{state.address.state}</b></p>
            <p>Индекс: <b>{state.address.zip}</b></p>
        </div>
    );
};

export default DetailInfo;