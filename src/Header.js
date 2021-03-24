import React from 'react'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
        color: "white",
        margin: "50px auto 20px auto",
    }

})

const Header = () => {
    const classes = useStyles()
    return (
        <div style={{ display: "flex" }}>
            <Typography variant="h3" className={classes.header}>
                Crypto Currency Tracker
          </Typography>
        </div>
    )
}

export default Header
