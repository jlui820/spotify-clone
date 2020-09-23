export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISH DEVELOPING AND CHANGE BACK TO NULL;
  token:
    'BQBmAvMq7JFzuQCF2a-ulNs0l0cFl28PrbnM_Ju4z9yqK-4WCuhNgoKUIgC-DAg1Jc68bxKPCHXrACAnCXerREZNR_lUv7VnWaXDCI9odif6Ym4hXlfDLzZf7JKZmPTsgqpLmB3VxS-nWCdp_luwSTk2Q-xU',
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
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    
    default:
      return state;
  }
}

export default reducer;