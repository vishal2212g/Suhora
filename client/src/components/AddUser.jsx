import React from "react";
import { useState } from "react";
import {
  FormGroup,
  FormControl,
  Typography,
  styled,
  Button,
  TextField,
} from "@mui/material";

import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const onValueChange = (e) => {
    // console.log (e.target.name, e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value });
    validation({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    addUser(user).then((response) => {
      if (response?.status === 201) {
        navigate("/all");
      }
    });
  };
// validation
  const validation = (value) => {
    const error = {};

    if (value?.name?.length <= 2) {
      error.name = "name is required and minimum length 3";
    }
    if (value?.username?.length <= 2) {
      error.username = "name is required and minimum length 3";
    }

    if (
      !value?.email ||
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value.email)
    ) {
      error.email = "Invalid email format";
    }
    if (!value?.phone || !/^\d{10}$/.test(value.phone)) {
      error.phone = "Invalid phone number. It should be 10 digits";
    }
    setError(error);
    return error;
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>

      <TextField
        name="name"
        label="Name"
        id="name"
        onChange={(e) => onValueChange(e)}
        value={user.name}
        error={error["name"]}
        helperText={error["name"]}
      />

      <TextField
        name="username"
        label="User Name"
        id="username"
        onChange={(e) => onValueChange(e)}
        value={user.username}
        error={error["username"]}
        helperText={error["username"]}
      />

      <TextField
        name="email"
        label="Email Id"
        id="email"
        onChange={(e) => onValueChange(e)}
        value={user.email}
        error={error["email"]}
        helperText={error["email"]}
      />

      <TextField
        name="phone"
        label="Phone Number"
        id="phone"
        onChange={(e) => onValueChange(e)}
        value={user.phone}
        error={error["phone"]}
        helperText={error["phone"]}
      />
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            if (Object.keys(validation(user))?.length === 0) {
              addUserDetails();
            }
          }}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};
export default AddUser;
