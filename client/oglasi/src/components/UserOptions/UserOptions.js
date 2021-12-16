import React, { useContext } from "react";
import { Container, UserLink } from "./styles/UserOptions";
import UserContext from "../../Contexts/userContext";

function UserOptions({ active, setActive }) {
  const UserData = useContext(UserContext);

  return (
    <Container active={active} onClick={() => setActive(!active)}>
      <UserLink to="/create/post">Create post</UserLink>
      <UserLink to="/profile/update">Update Profile</UserLink>
      <UserLink
        onClick={() => {
          UserData.logOutUser();
          setActive(!active);
        }}
      >
        LogOut
      </UserLink>
    </Container>
  );
}

export default UserOptions;
