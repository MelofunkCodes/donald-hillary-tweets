export const selectUser = (username) => {
  return {
    type: 'SELECT_USER',
    username,
  };
};