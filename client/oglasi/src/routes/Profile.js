import React from "react";
import { useParams } from "react-router";

import ViewProfile from "../components/ViewProfile/ViewProfile";

function Profile() {
  const { id } = useParams();

  return <ViewProfile id={id} />;
}

export default Profile;
