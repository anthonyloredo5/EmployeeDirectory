//Styles
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: grey,
  },
});

function createData(name, email, state, age, phone) {
  return { name, email, state, age, phone };
}

const rows = [
  createData('Jake', 'ant@ant.com', 'Florida', 30, 8637821458),
  createData('Kathy', 'ant@ant.com', 'Florida', 20, 58786793),
  createData('Emma', 'ant@ant.com', 'Florida', 23, 8885538545),
  createData('Mykull', 'ant@ant.com', 'Florida', 13, 56855714236),
  createData('Funky', 'ant@ant.com', 'Florida', 35, 9764285194),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}