import React, { createContext, useState, useEffect } from "react";
import { loginUser, tokenLogin, logoutUser } from "../helpers/loginUser";

const UserContext = createContext();

export function UserDataContext({ children }) {
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [profileImage, setProfileImage] = useState("no-image.png");
  const [error, setError] = useState("");

  useEffect(() => {
    logedInUser();
  }, [isUserLogedIn]);

  async function logedInUser() {
    const user = await tokenLogin();
    if (user.username) {
      setIsUserLogedIn(true);
      setUsername(user.username);
      setFirstName(user.name);
      setLastName(user.last_name);
      setDescription(user.description);
      setPhoneNumber(user.phone_number);
      setAdress(user.address);
    } else {
      setIsUserLogedIn(false);
      setUsername("");
    }
  }

  async function login(user) {
    const data = await loginUser(user);

    if (data.token) {
      console.log(data);
      setIsUserLogedIn(true);
      setUsername(data.userReturn.username);
    } else {
      setError(data[0]);
    }
  }

  async function logOutUser() {
    await logoutUser();
    setIsUserLogedIn(false);
  }

  return (
    <UserContext.Provider
      value={{
        isUserLogedIn,
        error,
        username,
        firstName,
        lastName,
        description,
        phoneNumber,
        adress,
        profileImage,
        login,
        logOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
