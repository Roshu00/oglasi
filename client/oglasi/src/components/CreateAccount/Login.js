import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  Label,
  Input,
  Message,
  LoginButton,
  Text,
} from "./styles/Login";
import UserContext from "../../Contexts/userContext";

function CreateAccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserData = useContext(UserContext);

  function handleLogin(event) {
    event.preventDefault();
    UserData.login({ email, password });
  }

  return (
    <div>
      <FormGroup onSubmit={handleLogin}>
        <Label htmlFor="Email">Email</Label>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="Email"
        />
        <Message></Message>

        <Label htmlFor="Password">Password</Label>
        <Input
          type="password"
          id="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Message></Message>

        <Text>
          Nemate kreiran profil?{" "}
          <Link to="/profile/create">KREIRAJ PROFIL</Link>
        </Text>

        <LoginButton type="submit">Login</LoginButton>
      </FormGroup>
    </div>
  );
}

export default CreateAccountForm;
