const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const genres = (state = initialState, action) => {
    
    if (action.type === 'SET_GENRES') {
      return {
        ...state,
        items: action.payload,
      };
    }
    return state;
  };
  
  export default genres;