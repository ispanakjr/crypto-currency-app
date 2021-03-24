import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { useQuery } from "react-query";
import Loading from "./animations/Loading";
import DownArrow from "./animations/DownArrow";
import UpArrow from "./animations/UpArrow";

const useStyles = makeStyles({
  tableWidth: {
    width: "60%",
  },
  image: {
    height: "30px",
    width: "30px",
  },
  tablex: {
    margin: "auto",
  },
  table: {
    backgroundColor: "#1a1a1c",
  },
  tableCell: {
    color: "white",
  },
  changeGreen: {
    color: "green",
  },
  changeRed: {
    color: "red",
  },
  cellDisplay: {
    display: "inline-block",
  },
});

const fetchCoin = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  return res.json();
};

const Crypto = ({ searchCoin }) => {
  const classes = useStyles();

  const { data, status } = useQuery("coin", fetchCoin, {
    refetchInterval: 30000,
  });
  console.log(data);

  const filteredCoins = data?.filter((coin) =>
    coin.name.toLowerCase().includes(searchCoin.toLowerCase())
  );

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className={classes.table}>
          <TableContainer>
            <Table
              size="small"
              classes={{ root: classes.tableWidth }}
              className={classes.tablex}
            >
              <TableRow className={classes.tablerow}>
                <TableCell>Coin</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Symbol</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">24H change</TableCell>
                <TableCell align="right">Market Cap</TableCell>
              </TableRow>
              <TableBody className={classes.tablebody}>
                {filteredCoins?.map((coins) => (
                  <TableRow key={coins.key}>
                    <TableCell>
                      <img
                        className={classes.image}
                        src={coins.image}
                        alt="imagecoin"
                      />
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {coins.name}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {coins.symbol.toUpperCase()}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      ${coins.current_price.toFixed(2)}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      ${coins.total_volume.toLocaleString()}
                    </TableCell>

                    {coins.price_change_percentage_24h.toFixed(2) > 0 ? (
                      <TableCell className={classes.changeGreen} align="right">
                        <div style={{ display: "flex" }}>
                          <div style={{ display: "inline-block" }}>
                            <UpArrow />
                          </div>
                          <div style={{ display: "inline-block" }}>
                            %{coins.price_change_percentage_24h.toFixed(2)}
                          </div>
                        </div>
                      </TableCell>
                    ) : (
                      <TableCell align="right" className={classes.changeRed}>
                        <div style={{ display: "flex" }}>
                          <div style={{ display: "inline-block" }}>
                            <DownArrow />
                          </div>
                          <div style={{ display: "inline-block" }}>
                            {coins.price_change_percentage_24h.toFixed(2)}%
                          </div>
                        </div>
                      </TableCell>
                    )}

                    <TableCell align="right" className={classes.tableCell}>
                      ${coins.market_cap.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default Crypto;
