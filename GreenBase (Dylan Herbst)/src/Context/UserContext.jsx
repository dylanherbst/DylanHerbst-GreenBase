import React from "react";
import { useContext, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    const handleLogOut = () => {
        setCurrentUser({});
    }

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, handleLogOut }}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}
