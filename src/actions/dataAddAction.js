import {addData} from "../redux/reducer";
import _ from "lodash";

export const getUsers = () => (dispatch, getState) => {

    fetch('http://www.filltext.com/?rows=250&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        .then(response => response.json())
        .then(data => dispatch(addData(_.orderBy(data, 'id', 'asc'))))


};