import "./Customers.css";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Customers() {
  const [appData, setAppData] = useState({ customers: [], packages: [] });
  const navigate = useNavigate();
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
  const handleDeleteCustomer = (customerId) => {
    const updatedCustomers = appData.customers.filter(
      (customer) => customer.id !== customerId
    );
    setAppData({ ...appData, customers: updatedCustomers });
  };

  const handleCreateInvoice = (customerData) => {
    navigate("/invoice", { state: { customer: customerData } }); // Navigate with data
  };

    return (
        <div className="Customers">
					
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>id</TableCell>
      <TableCell>Name</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {appData.customers.map((row) => {
      return (
        <TableRow
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>
            <Button variant="contained"
             onClick={() => handleCreateInvoice(row)}
            >Create Invoice</Button>
            
          </TableCell>
          <TableCell>
            <Button variant="contained" 
            onClick={() => handleDeleteCustomer(row.id)}
            >Delete</Button>
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

export default Customers;
