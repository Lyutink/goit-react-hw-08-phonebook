const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserMail = state => state?.auth?.user?.email;
const getUsername = state => state.auth.user.name;
const getIsLoadingCurrentUser = state => state.auth.isLoadingCurrentUser;

export const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserMail,
  getIsLoadingCurrentUser,
};
