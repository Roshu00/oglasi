import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Message,
  LoginButton,
  Text,
} from "./styles/CreateProfileForm";
import ImageInput from "../ImageInput/ImageInput";
import { createProfile } from "../../helpers/createProfile";

function CreateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  function handleSubmit(e) {
    setMessage({});
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ passwordMessage: "lozinke nisu iste" });
    } else {
      createProfile({
        email,
        password,
        username,
        name,
        lastName,
        description,
        phoneNumber,
        address,
        imageUrl,
      });
    }
  }
  return (
    <FormGroup>
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
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="Password"
      />
      <Message></Message>
      <Label htmlFor="Password">Confirm Password</Label>
      <Input
        type="password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        id="ConfirmPassword"
      />
      <Label htmlFor="Username">Username</Label>
      <Input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        id="Username"
      />
      <Message>{message.passwordMessage}</Message>
      <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <Label htmlFor="Name">Ime</Label>
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="Name"
      />
      <Message></Message>
      <Label htmlFor="LastName">Prezime</Label>
      <Input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        id="LastName"
      />
      <Message></Message>
      <Label htmlFor="Description">Opis prodavca</Label>
      <Input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        id="Description"
      />
      <Message></Message>
      <Label htmlFor="PhoheNumber">Broj telefona</Label>
      <Input
        type="tel"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        id="PhoneNumber"
      />
      <Message></Message>
      <Label htmlFor="Address">Adresa</Label>
      <Input
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        id="Address"
      />
      <Message></Message>

      <LoginButton type="submit" onClick={handleSubmit}>
        Napravi Profil
      </LoginButton>
    </FormGroup>
  );
}

export default CreateProfile;
