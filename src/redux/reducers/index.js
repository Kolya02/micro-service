const initialState = {
  users: [
    { fullName: '123',
      password: '123',
      email:'123@gmail.com',
      id:1,
    },
    {
      fullName: 'asd',
      password: 'asd',
      email: 'asd@gmail.com',
      id: 2,
    },
    {
      fullName: '1234',
      password: '1234',
      email: '1234@gmail.com',
      id: 3,
    },
    {
      fullName: '1qaz',
      password: '1qaz',
      email: '1qaz@gmail.com',
      id: 4,
    },
    {
      fullName: '2wsx',
      password: '2wsx',
      email: '2wsx@gmail.com',
      id: 5,
    },
  ],
  uniqueId: 6,
  authUser: null,
}

function userReducer(state = initialState, action) {
  
  let user, users;
  // console.log(state)
  switch (action.type) {
    case "CREATE_USER":
      user = { id: state.uniqueId, ...action.payload };
      users = [...state.users, user];

      return {
        ...state,
        users: users,
        uniqueId: state.uniqueId + 1,
        authUser: user
      }

    case "LOG_IN":
      const searchedUser = state.users.find(user => {
        if (
          action.payload.email    === user.email && 
          action.payload.password === user.password
        ) {
          return true;
        }
        return false;
      });

      return {
        ...state,
        authUser: searchedUser
      }

    case "LOG_OUT":
      localStorage.removeItem(1);
      console.log("log out");
    
      return {
        ...state,
        authUser: null
      }
    

    case "UPDATE_USER":
      const updatedUser = { ...state.authUser, ...action.payload };
      const arrUsers = state.users.filter(user => user.id != updatedUser.id)
      users = [...arrUsers, updatedUser];
      localStorage.setItem(1, JSON.stringify(updatedUser));
      return {
        ...state,
        users: users,
        authUser: updatedUser
      }

    case "GET_USER_LOCAL_STORAGE":
      const userLocalStorage = JSON.parse(localStorage.getItem(1));
      return {
        ...state,
        authUser: { ...userLocalStorage}
      }
      
    default:
      return state;
  }
}

export default userReducer;