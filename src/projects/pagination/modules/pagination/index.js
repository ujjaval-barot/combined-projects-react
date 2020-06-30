import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTableDataAction } from "../../../../actions/paginationActions";
import Pagination from "./Pagination";

export default withRouter(
  connect(
    (state) => ({
      hits: state.pagination.hits,
      loading: state.pagination.loading,
      error: state.pagination.errorMessage,
    }),
    (dispatch) => ({
      getTableData: (page) => {
        dispatch(getTableDataAction(page));
      },
    })
  )(Pagination)
);
