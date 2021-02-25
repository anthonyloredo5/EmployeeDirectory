import React from "react";
import { TextField, MuiThemeProvider } from "material-ui";
import useStyles from "./Search.css";

const Search = () => {

    return (
        <MuiThemeProvider class="search">
            <form class="search" noValidate autoComplete="off">
                <TextField  class="search" id="outlined-basic" label="Outlined" variant="outlined" placeholder="search"/>
            </form>
        </MuiThemeProvider>
    );
}

export default Search;