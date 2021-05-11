const initialState = {
    items: [],
    isLoaded: false,
  };
  
  const authors = (state = initialState, action) => {
    
    if (action.type === 'SET_AUTHORS') {
      return {
        ...state,
        items: action.payload,
      };
    }
    return state;
  };
  
  export default authors;