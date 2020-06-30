import {
  GET_TABLE_DATA_PENDING,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FAIL,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  hits: [
    {
      author: "bitsignal",
      comment_text: null,
      created_at: "2020-05-28T11:34:28.000Z",
      created_at_i: 1590665668,
      num_comments: 0,
      objectID: "23336097",
      parent_id: null,
      points: 1,
      story_id: null,
      story_text: null,
      story_title: null,
      story_url: null,
      title: "Tesla Motors Expo",
      url: "https://hypernodes.bismuth.live/?p=1318",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLE_DATA_PENDING:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };

    case GET_TABLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        hits: [...state.hits, ...action.payload.hits],
      };

    case GET_TABLE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
