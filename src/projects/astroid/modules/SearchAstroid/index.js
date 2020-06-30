import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as astroidActions from "../../../../actions/astroidActions";
import SearchAstroid from "./SearchAstroid";

export default withRouter(
  connect(
    (state) => ({
      astroid: state.astroid,
    }),
    (dispatch) => ({
      getAllAsteroids: () => {
        dispatch(astroidActions.GET_ALL_ASTEROIDS());
      },
    })
  )(SearchAstroid)
);
