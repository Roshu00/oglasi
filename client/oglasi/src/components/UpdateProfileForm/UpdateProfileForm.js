import React, { useState, useContext, useEffect } from "react";
//styles
import {
  FormGroup,
  Input,
  Label,
  Message,
  UpdateProfileButton,
} from "./styles/UpdateProfileForm";
//UserContext
import UserContext from "../../Contexts/userContext";
//UpdateFunction
import { updateUserProfile } from "../../helpers/updateUserProfile";

//UZMI SVE PODATKE OD SELLERA I UBACi IH KAO POCETNA VREDNOST PRE PROMENE I NAPRAVI
//FUNKCIJU KOJA CE DA POSALJE SVE PODATKE
//NA BACKEND ZARAD PROMENE PODATAKA USERA ZATIM NAPRAVI CREATE ACC COMPONENT
//NA ISTU FORU KOJI CE NAPRAVITI NOVI NALOG ZA KORISCENJE OVE APLIKACIJE

function UpdateProfileForm() {
  const UserData = useContext(UserContext);
  const [username, setUsername] = useState(UserData.username);
  const [firstName, setFirstName] = useState(UserData.firstName);
  const [lastName, setLastName] = useState(UserData.lastName);
  const [description, setDescription] = useState(UserData.description);
  const [phoneNumber, setPhoneNumber] = useState(UserData.phoneNumber);
  const [address, setAddress] = useState(UserData.adress);

  const handleSubmit = async (e) => {
    console.log("SUBMITING");
    const userProfileId = await updateUserProfile({
      username,
      firstName,
      lastName,
      description,
      phoneNumber,
      address,
    });
    // posle dodaj ovde history.push za gledanje profila
    console.log(userProfileId);
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      {/* <Label htmlFor="ProfilePic">Fotografija Profila</Label>
      <ImageInput /> UBACITI OVU OPCIJU KASNIJE!!!!!*/}
      <Label htmlFor="Username">Username</Label>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Message></Message>
      <Label htmlFor="Name">Ime</Label>
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></Input>
      <Message></Message>
      <Label htmlFor="LastName">Prezime</Label>
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></Input>
      <Message></Message>
      <Label htmlFor="Description">Opis</Label>
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Input>
      <Message></Message>
      <Label htmlFor="PhoneNumber">Broj Telefona</Label>
      <Input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></Input>
      <Message></Message>
      <Label htmlFor="Address">Adresa</Label>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></Input>
      <Message></Message>
      <UpdateProfileButton type="submit">Sacuvaj</UpdateProfileButton>
    </FormGroup>
  );
}

export default UpdateProfileForm;
