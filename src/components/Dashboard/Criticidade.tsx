import React, { useState, useEffect, useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import UserData from "../../contexts/UserData";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    fontWeight:'bold',
    textTransform: 'capitalize',
  }
});

const Criticidade = (props:any) => {
  const userData = useContext(UserData);
  const [rows, setRows] = useState<any[]>([]);
  const classes = useStyles()

  useEffect(() => {
    axios
      .get(`checkmanip/criticidade?field=${userData.user.field}&kind=checks`)
      .then((response) => {
        let data = response.data
        data = data.sort((a:any,b:any) => {
          if(a.done.realizados/a.wait.previstos > b.done.realizados/b.wait.previstos){
            return 1;
          }else if (a.done.realizados/a.wait.previstos < b.done.realizados/b.wait.previstos){
            return -1
          }else{
            return 0
          }
        })
        setRows(data);
        props.data(data)
      });
  }, []);
  return (
    <React.Fragment>
      <Typography align='center' component="h2" variant="h6" color="primary" gutterBottom>Relatório de Criticidade CIL</Typography>
      <Table stickyHeader >
        <TableHead >
          <TableRow >
            <TableCell classes={{root:classes.root}}>Equipamento</TableCell>
            <TableCell classes={{root:classes.root}}>Execução</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row: any, index) => {
              return (
                <TableRow key={`lista-criticidade-${index}`}>
                  <TableCell>{row.name.slice(8,row.name.length)}</TableCell>
                  <TableCell>{`${
                   Number(row.done.realizados / row.wait.previstos *100).toFixed(2)
                  } %`}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Criticidade;
