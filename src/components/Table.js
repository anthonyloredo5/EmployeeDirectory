//Styles
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import axios from "axios";

import API from "../util/API";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: grey,
  },
});



export default function BasicTable() {
  const classes = useStyles();
  const [ items, setItems ] = useState("");
  
  const getData = () => {
    axios.get("https://randomuser.me/api/")
    .then((response) => {
      console.log(response, "APppplepslpef");
      console.log(response.data.results[0]);
      setItems(response.data.results[0]);
    })
    //setItems(data);
    //console.log(data);
  }

  return (
    <TableContainer component={Paper}>
      <button onClick={getData}>Get the damn data</button>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">State&nbsp;</TableCell>
            <TableCell align="right">Age&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key={items}>
              <TableCell component="th" scope="row">
                {items.name.first}
              </TableCell>
              <TableCell align="right">{items.email}</TableCell>
              <TableCell align="right">{items.location.state}</TableCell>
              <TableCell align="right">{items.dob.age}</TableCell>
              <TableCell align="right">{items.cell}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}