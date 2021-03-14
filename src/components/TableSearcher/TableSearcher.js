import styles from './TableSearcher.module.css'
import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {searchItem} from "../../redux/reducer";
const TableSearcher = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const valueChangeHandler = event => {
        event.preventDefault()
        setValue(event.target.value)
        dispatch(searchItem(value && value))
    }


    return (
        <div className="input-group mb-3 mt-3">
            <input className={`${styles.input}`}
                type="text"
placeholder={'ПОИСК'}

                onChange={(e)=>valueChangeHandler(e)}
                value={value}
            />
        </div>
    )
}
export default TableSearcher;

