import React from "react";
import { UserItem, UserUsername, NavItem } from "./styles/NavProfile";

function NavProfile({
  isUserLogedIn,
  username,
  disableFilter,
  active,
  setActive,
}) {
  if (isUserLogedIn) {
    return (
      <UserItem
        onClick={() => {
          setActive(!active);
          disableFilter(false);
        }}
      >
        <UserUsername>{username}</UserUsername>
      </UserItem>
    );
  } else {
    return <NavItem to="/login">Login</NavItem>;
  }
}

export default NavProfile;
