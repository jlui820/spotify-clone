export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISH DEVELOPING AND CHANGE BACK TO NULL;
  token:
    'BQB-inqRlKY2QVx7KSF_o6ZzIaYRBPs2zE8GAIMiEyFb_0UNV8D89cy-L9jVltcdPuzJrTgnbXwvM1fVK5IZxnyRpi-GJx0AmId7wmjqHLqMsZ42PhES5fNelXzk6rOm1NVqulH8vu7rj3GgFcH9vp7DJdM0',
};

const reducer = (state, action) => {
  console.log('this is action being dispatched',action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    
    default:
      return state;
  }
}

export default reducer;