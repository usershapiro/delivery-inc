import "./Packages.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState ,useEffect} from "react";

function Packages() {
    const [appData, setAppData] = useState({ customers: [], packages: [] });
 
    useEffect(() => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setAppData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle the error here, e.g., display an error message
        });
    }, []);
    return ( 
        <div className="Packages">
		  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Price</TableCell>

                <TableCell>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <AddIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appData.packages.map((row) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.weight}</TableCell>

                    <TableCell></TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <Button variant="contained">Delete</Button>
                      <i>Up down buttons should go here</i>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    );
}

export default Packages;
