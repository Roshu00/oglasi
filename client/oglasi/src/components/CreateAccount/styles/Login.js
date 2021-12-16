import styled from "styled-components";

export const FormGroup = styled.form`
  color: black;
  display: block;
  width: 300px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: black;

  a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(69, 91, 237);
    transition: linear 0.2s;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgb(69, 91, 237);
  border-radius: 2px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  :hover {
    transition: 200ms;
    opacity: 0.8;
  }
`;
