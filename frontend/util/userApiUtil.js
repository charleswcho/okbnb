import ServerActions from '../actions/serverActions';

const UserApiUtil = {
  create(credentials) {
    console.log(credentials)
    $.ajax({
      method: "POST",
      url: "api/user",
      data: { user: credentials },
      success(currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error(e) {
        ServerActions.handleError(e)
      }
    });
  },

  signIn(credentials) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: { user: credentials },
      success(currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error(e) {
        ServerActions.handleError(e)
      }
    });
  },

  signOut() {
    $.ajax({
      method: "DELETE",
      url: "api/session",
      success(currentUser) {
        ServerActions.removeCurrentUser(currentUser);
      },
      error(e) {
        ServerActions.handleError(e)
      }
    });
  },

  fetchCurrentUser() {
    $.ajax({
      url: "api/session",
      success(currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error(e) {
        ServerActions.handleError(e);
      }
    });
  },

  clearErrors() {
    ServerActions.clearErrors();
  }
}

export default UserApiUtil;
