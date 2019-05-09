export const createUser = (newUser) => ({ type: "CREATE_USER", payload: newUser });
export const logIn = (user) => ({ type: "LOG_IN", payload: user });
export const logOut = () => ({ type: "LOG_OUT", payload: null });
export const updateUser = (data) => ({ type: "UPDATE_USER", payload: data });
export const getUserlocalStorage = () => ({ type: "GET_USER_LOCAL_STORAGE", payload: null });
