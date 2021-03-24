import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    text: {
        margin: "50px auto 50px auto",
        width: "20%",
        backgroundImage: "linear-gradient(-225deg, #ac32e4 10%, #7918f2 58%, #4801ff 100%)",
    },

    searchContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: 0
    },

    border: {
        borderRadius: 0,
        '&:hover fieldset': {
            borderColor: 'white ! important',
        },

    },

    focused: {
        '& fieldset': { borderColor: 'white ! important' },
    },
    color: {
        color: "white"
    }
})


const Search = ({ changeHandler }) => {
    const classes = useStyles()
    return (
        <div className={classes.searchContainer}>
            <TextField id="search" color="secondary" label={<SearchIcon style={{ color: "white" }} />} placeholder="Search Coin" size="medium" variant="outlined" onChange={changeHandler} className={classes.text} InputProps={{
                classes: {
                    root: classes.border,
                    focused: classes.focused,
                    input: classes.color
                }
            }} />
        </div>
    )
}

export default Search
