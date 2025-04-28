// import React, { createContext, useState } from "react";

// export const UserDataContext = createContext();

// const UserContext = ({ children }) => {
//     const [user, setUser] = useState({
//         firstName: '',
//         lastName: '',
//         email: ''
//     });

//     return (
//         <UserDataContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserDataContext.Provider>
//     );
// };

// export default UserContext;


import { createContext, useState } from 'react';

export const UserDataContext = createContext(null);

export const UserDataContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

