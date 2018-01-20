const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.username;
    default:
      return state;
  }
};

export default currentUser;
