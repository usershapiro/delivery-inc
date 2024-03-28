import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./App.css";
import {   NavLink } from 'react-router-dom';
import Routing from "./Components/RoutingArea/Routing/Routing";
// import { useState ,useEffect} from "react";
// import Customers from "./Components/CustomersArea/Customers/Customers";
// import Packages from "./Components/PackagesArea/Packages/Packages";

function App() {
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  // const [appData, setAppData] = useState({ customers: [], packages: [] });
  // const [invoices] = useState([]);

 

  


  return (
    <div className="App">
      
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon onClick={toggleDrawer(true)} />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Mail Delivery Service
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Routing/>
        {/* <Customers appData={appData}/>
        <Packages appData={appData}/> */}
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
          <List style={{ width: "300px" }}>
            <NavLink to={"/packages"}>
            <ListItem  button>
              <ListItemText primary={"Packages"}   />
            </ListItem>
            </NavLink>
            <NavLink to={"/customers"}>
            <ListItem button >
              <ListItemText primary={"Customers"} />
            </ListItem>
            </NavLink>
            <NavLink to={"/invoice"}> 
            <ListItem button>
              <ListItemText primary={"Invoices"} />
            </ListItem>
            </NavLink>
          </List>
        </Drawer>
    
    
     
    </div>
  );
}

export default App;
