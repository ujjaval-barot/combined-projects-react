import { GET_TABLE_DATA_PENDING } from "./actionTypes";

export const getTableDataAction = (page) => {
  return (dispatch) => {
    console.log(page);
    dispatch({ type: GET_TABLE_DATA_PENDING, payload: page });
  };
};
