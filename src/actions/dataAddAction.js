import {addData} from "../redux/reducer";
import _ from "lodash";

export const getUsers = () => (dispatch, getState) => {
setTimeout(() => {
    fetch('https://mockend.com/FIREguardSPB/mockfetch/posts')

        .then(response => response.json())
        .then(data => dispatch(addData(_.orderBy(data, 'id', 'asc'))))

}, 1000)
};