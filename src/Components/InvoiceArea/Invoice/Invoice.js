import "./Invoice.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

function Invoice() {
    const [invoices,setInvoice] = useState([]);
    
    
    return (
        <div className="Invoice">
			<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Total Weight</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {invoices.map((row) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  ></TableRow>
                );
              })} */}
                {invoices.map((row) => (
              <TableRow key={row.customerName}>
                <TableCell>{row.customerName}</TableCell>
                <TableCell>{row.totalWeight}</TableCell>
                <TableCell>{row.totalPrice}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    );
}

export default Invoice;
