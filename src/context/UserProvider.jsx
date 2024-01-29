import React, { createContext, useState, useEffect } from "react";
import { db, auth } from '../config/Config'
import { onAuthStateChanged } from 'firebase/auth';


export const UserContext = createContext({});


export default function UserProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
