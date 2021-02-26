//Styles
import React, { useEffect, useState, } from 'react';
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
import Search from './Search'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: grey,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  
  const [items, setItems] = useState({
    allPeople: [],
    filteredPeople: [],
    searchTerm: ''
  });

  useEffect(function () {
    axios.get("https://randomuser.me/api/?results=100")
      .then((response) => {
        setItems({...items, allPeople: response.data.results});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //builds the filtered people item in the state object by comparing user input to user inout to our existing allPeople item
  const handleState = (e) => {
    var array = [];
    for (let i = 0; i < items.allPeople.length; i++) {
      var name = items.allPeople[i].name.first.slice(0, e.target.value.length);
      if(name === e.target.value){
        array.push(items.allPeople[i]);
        console.log(array);
      }
    }
    setItems({...items, searchTerm: e.target.value, filteredPeople: array});
  }

  //Changes table row display based on user input
  var peopleToDisplay = items.allPeople;
  if( items.filteredPeople.length > 0){
    peopleToDisplay = items.filteredPeople
  }else if(items.searchTerm.length > 0 && items.filteredPeople.length < 1){
    peopleToDisplay = [];
  }

  return (
    <div>
    <Search handleState={handleState}/>
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
        {items.allPeople.length > 0 ? (
          <TableBody>
            {peopleToDisplay.map((items) => {
              return (
                <TableRow key={items}>
                  <TableCell component="th" scope="row">
                    {items.name.first}
                  </TableCell>
                  <TableCell align="right">{items.email}</TableCell>
                  <TableCell align="right">{items.location.state}</TableCell>
                  <TableCell align="right">{items.dob.age}</TableCell>
                  <TableCell align="right">{items.cell}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : ""}
      </Table>
    </TableContainer>
    </div>
  );
}