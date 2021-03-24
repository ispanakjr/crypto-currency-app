import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        width: "%80",
        margin: "50px 50px 50px 50px"
    },
    image: {
        height: "20px",
        width: "20px",
        maxWidth: "30px",
    },
    img: {
        minWidth: 50,
    },
});

const TableCoin = () => {
    const classes = useStyles()
    return (
        <div>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableRow className={classes.table}>
                        <TableCell>Coin</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Volume</TableCell>
                        <TableCell align="right">24H change</TableCell>
                        <TableCell align="right">Market Cap</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>



        </div >
    )
}

export default TableCoin
