//@ts-nocheck
import React from 'react'
import { users } from '../resources/Users.ts'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';


function UsersScreen() {
    return (
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell >id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Lastname</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Years of experience</TableCell>
                <TableCell align="right"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({id, name, lastName, role, yearsOfExperience}) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{id}</TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{lastName}</TableCell>
                  <TableCell align="right">{role}</TableCell>
                  <TableCell align="right">{yearsOfExperience}</TableCell>
                  <TableCell align="right">
                    <NavLink to={`/user/${id}`} className='btn btn-info'> Edit </NavLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );



}

export default UsersScreen



