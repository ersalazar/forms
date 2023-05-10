//@ts-nocheck
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { User, users } from "../resources/Users.ts";
import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import useForm from '../hooks/useForm.ts';
import { addUser, updateUser, deleteUser, getUser } from "../resources/UsersFirebase.ts";

const emptyUser : User = {
    name: '',
    role: '',
    salary: 0,
    address: '',
  };

function UserScreen() {

    const loadUser = async(id) => {
        const userData = await getUser(id)
        return userData

    }

    const { id } = useParams();


    const [formUser, handleChange] = useForm(emptyUser);

    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');

    const { name, role, salary, address } = formUser; 

  
    const update = async() => {
    const result = await updateUser(id, formUser);
    result ? setSuccess("User updated") : setError("User not updated");

    }
    const deleteData = async() => {
        if(window.confirm('Estas seguro que quieres')){
        
            const result = await deleteUser(id);
            result ? setSuccess("User Deleted") : setError("User not deleted");
        }

    }

    return (
      <Container>
        <Grid container spacing={2} marginTop={3}>
          <Grid container>
            <Grid item md={4} sm={3} xs={0}></Grid>
            <Grid item md={4} sm={6} xs={12}>
            { success && <Alert severity="success">{success}</Alert>}
            { error && <Alert severity="error">{error}</Alert>}
              <Typography variant="h4">
                Add/Edit user
              </Typography>
            </Grid>
          </Grid>
          <Grid container marginTop={3}>
            <Grid item md={4} sm={3} xs={0}></Grid>
              <Grid item md={4} sm={6} xs={12}>
              <TextField type="text" name="name" value={name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" />
              <br/><br/>
              <TextField type="text" name="role" value={role} onChange={handleChange} fullWidth={true} label="Role" variant="outlined" />
              <br/><br/>
              <TextField type="numer" name="salary" value={salary} onChange={handleChange} fullWidth={true} label="Salary" variant="outlined" />
              <br/><br/>
              <TextField type="text" name="address" value={address} onChange={handleChange} fullWidth={true} label="Address" variant="outlined" />
              <br/><br/>
              <Button variant="outlined" onClick={update} >save</Button>
              <Button variant="outlined" onClick={deleteData} >Delete</Button>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    );
  }
  export default UserScreen;