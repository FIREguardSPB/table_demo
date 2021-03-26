import styles from './TableSearcher.module.css'
import React from 'react'

const TableSearcher = ({value, setValue, state}) => {
    const valueChangeHandler = event => {
        event.preventDefault()
        setValue(event.target.value)
    }

    return (
        <>
            <div className="input-group mb-3 mt-3">
                <input className={`${styles.input}`}
                       type="text"
                       placeholder={'ПОИСК'}
                       onChange={valueChangeHandler}
                       value={value}
                />
            </div>
        </>
    )
}
export default TableSearcher;

